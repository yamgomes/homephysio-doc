import { TestBed } from '@angular/core/testing';
import { computed, signal } from '@angular/core';
import { provideRouter, Router } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';
import { AuthState } from './auth-state';
import { PatientApi } from './patients/patient-api';
import { PatientStore } from './patients/patient.store';
import type { Patient, Therapy } from '@homephysio/contracts';
import { defaultTherapy } from '@homephysio/contracts';

describe('Painel profissional', () => {
  it('abre a página do paciente no histórico e edita o plano sob demanda', async () => {
    const uid = signal<string | null>(null);
    const emailVerified = signal(false);
    const auth = {
      uid, emailVerified, ready: signal(true), error: signal(false),
      user: computed(() => uid() ? { email: 'pessoa@example.com', emailVerified: emailVerified() } : null),
      pending: signal(false), message: signal(null),
    };
    const patient: Patient = { id: 'p1', name: 'Paciente fictício', code: '', therapy: defaultTherapy('goalkeeper'), revision: 0 };
    let failPrescription = true;
    await TestBed.configureTestingModule({ imports: [App], providers: [
      provideRouter(routes),
      { provide: AuthState, useValue: auth },
      { provide: PatientApi, useValue: {
        list: async () => [patient],
        listResults: async () => [{
          id: 'session-1', title: 'Sessão de goleiro', gameId: 'goalkeeper', completedAtMs: 1780300800000, endReason: 'completed',
          hits: 3, misses: 5, points: 30, activeMs: 21000, pausedMs: 2000,
          movement: { shoulderRepetitions: { left: 5, right: 4 } },
        }, {
          id: 'session-2', title: 'Caminhada', gameId: 'walking', completedAtMs: 1780300800000, endReason: 'completed',
          hits: 0, misses: 0, points: 0, activeMs: 30000, pausedMs: 0,
          movement: { lowerBody: { kneeHeight: { left: 60, right: 65 }, balance: 90 } },
        }],
        prescribe: async (_: string, therapy: Therapy) => {
          if (failPrescription) throw new Error('Não foi possível salvar.');
          return { ...patient, therapy, revision: 1, code: 'A'.repeat(6) };
        },
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
    expect(el.querySelector('app-therapy-form')).toBeNull();
    el.querySelector<HTMLAnchorElement>('#pacientes li a')!.click();
    await fixture.whenStable();
    expect(router.url).toBe('/pacientes/p1');
    expect(el.querySelector('#pacientes')).toBeNull();
    const history = el.querySelector('app-patient-history')!;
    expect(history.textContent).toContain('3 defesas');
    expect(history.textContent).toContain('5 gols sofridos');
    expect(history.textContent).toContain('5 à esquerda, 4 à direita');
    expect(history.textContent).toContain('60% à esquerda e 65% à direita');
    expect(history.textContent).toContain('Equilíbrio médio estimado · 90%');
    expect(el.querySelector('app-therapy-form')).toBeNull();
    const edit = el.querySelector<HTMLButtonElement>('button[aria-haspopup="dialog"]')!;
    expect(edit.textContent).toContain('Editar plano atual');
    edit.click();
    await fixture.whenStable();
    expect(el.querySelector('label[for="targetSeconds"]')?.textContent).toContain('Tempo de voo da bola');
    expect(el.querySelector<HTMLInputElement>('input#targetSeconds')?.value)
      .toBe(new Intl.NumberFormat('pt-BR').format(patient.therapy!.targetSeconds));
    expect(el.querySelector('#holdSeconds')).toBeNull();
    expect(el.querySelector('#durationSeconds')).toBeNull();
    const cancelEdit = [...el.querySelectorAll<HTMLButtonElement>('app-therapy-form button')]
      .find(button => button.textContent?.includes('Cancelar'))!;
    cancelEdit.click();
    await fixture.whenStable();
    expect(el.querySelector('app-therapy-form')).toBeNull();
    expect(el.querySelector('app-patient-history')).toBe(history);
    edit.click();
    await fixture.whenStable();
    const store = TestBed.inject(PatientStore);
    const title = el.querySelector<HTMLInputElement>('#therapy-title')!;
    title.value = 'Novo plano';
    title.dispatchEvent(new Event('input'));
    const form = el.querySelector('app-therapy-form form')!;
    form.dispatchEvent(new Event('submit', { cancelable: true }));
    await fixture.whenStable();
    expect(form.querySelector('[role="alert"]')?.textContent).toContain('Não foi possível salvar.');
    expect(title.value).toBe('Novo plano');
    failPrescription = false;
    form.dispatchEvent(new Event('submit', { cancelable: true }));
    await fixture.whenStable();
    expect(el.querySelector('app-therapy-form')).toBeNull();
    expect(el.querySelector('aside')?.textContent).toContain('Novo plano');
    expect(el.querySelector('app-patient-history')).toBe(history);
    expect(el.querySelector('code')?.textContent).toContain('AAAAAA');
    await store.rotate();
    await fixture.whenStable();
    expect(el.querySelector('code')?.textContent).toContain('BBBBBB');
    auth.uid.set(null);
    await fixture.whenStable();
    expect(el.querySelector('code')).toBeNull();
  });
});

