import { TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import { provideRouter, Router } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';
import { AuthState } from './auth-state';
import { PatientApi } from './patients/patient-api';
import { PatientStore } from './patients/patient.store';
import type { Patient, Therapy } from '@homephysio/contracts';
import { defaultTherapy } from '@homephysio/contracts';

describe('Painel profissional', () => {
  it('carrega pacientes ao entrar e deixa a terapia e o código na página do paciente', async () => {
    const auth = { uid: signal<string | null>(null), emailVerified: signal(false), ready: signal(true), error: signal(false) };
    const patient: Patient = { id: 'p1', name: 'Paciente fictício', code: '', therapy: defaultTherapy('goalkeeper'), revision: 0 };
    await TestBed.configureTestingModule({ imports: [App], providers: [
      provideRouter(routes),
      { provide: AuthState, useValue: auth },
      { provide: PatientApi, useValue: {
        list: async () => [patient],
        listResults: async () => [{
          id: 'session-1', title: 'Sessão de goleiro', gameId: 'goalkeeper', completedAtMs: 1780300800000, endReason: 'completed',
          hits: 3, misses: 5, points: 30, activeMs: 21000, pausedMs: 2000,
          movement: { shoulderRepetitions: { left: 5, right: 4 } },
        }],
        prescribe: async (_: string, therapy: Therapy) => ({ ...patient, therapy, revision: 1, code: 'A'.repeat(6) }),
        rotate: async (p: Patient) => ({ ...p, revision: 2, code: 'B'.repeat(6) }),
      } },
    ] }).compileComponents();
    const fixture = TestBed.createComponent(App);
    const el = fixture.nativeElement as HTMLElement;
    const router = TestBed.inject(Router);
    await router.navigateByUrl('/pacientes');
    await fixture.whenStable();
    expect(el.querySelector('#pacientes')).toBeNull();
    auth.uid.set('owner');
    auth.emailVerified.set(true);
    await fixture.whenStable();
    expect(el.querySelector('#pacientes li')?.textContent).toContain(patient.name);
    expect(el.querySelector('#patient-name')).toBeNull();
    const add = [...el.querySelectorAll<HTMLButtonElement>('#pacientes button')]
      .find(button => button.textContent?.includes('Adicionar paciente'));
    add!.click();
    await fixture.whenStable();
    expect(el.querySelector('#patient-name')).not.toBeNull();
    const cancel = [...el.querySelectorAll<HTMLButtonElement>('app-patient-create-dialog button')]
      .find(button => button.textContent?.includes('Cancelar'));
    cancel!.click();
    await fixture.whenStable();
    expect(el.querySelector('#terapia')).toBeNull();
    el.querySelector<HTMLAnchorElement>('#pacientes li a')!.click();
    await fixture.whenStable();
    expect(router.url).toBe('/pacientes/p1');
    expect(el.querySelector('#pacientes')).toBeNull();
    expect(el.querySelector('label[for="targetSeconds"]')?.textContent).toContain('Tempo de voo da bola');
    expect(el.querySelector<HTMLInputElement>('input#targetSeconds')?.value).toBe('1');
    expect(el.querySelector('#holdSeconds')).toBeNull();
    expect(el.querySelector('#durationSeconds')).toBeNull();
    const history = el.querySelector('app-patient-history')!.textContent;
    expect(history).toContain('3 defesas');
    expect(history).toContain('5 gols sofridos');
    expect(history).toContain('5 à esquerda, 4 à direita');
    const store = TestBed.inject(PatientStore);
    el.querySelector('#terapia form')!.dispatchEvent(new Event('submit', { cancelable: true }));
    await fixture.whenStable();
    expect(el.querySelector('code')?.textContent).toContain('AAAAAA');
    await store.rotate();
    await fixture.whenStable();
    expect(el.querySelector('code')?.textContent).toContain('BBBBBB');
    auth.uid.set(null);
    await fixture.whenStable();
    expect(el.querySelector('code')).toBeNull();
  });
});

