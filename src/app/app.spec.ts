import { TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import { App } from './app';
import { AuthState } from './auth-state';

describe('Acesso às atividades', () => {
  let auth: { uid: ReturnType<typeof signal<string | null>>; ready: ReturnType<typeof signal<boolean>>; error: ReturnType<typeof signal<boolean>> };
  const key = 'homephysio.professional.demo.v1';
  const plan = (id: string) => ({ id, title: id, displayName: 'Exemplo', gameId: 'shoulder', config: { targets: [], repetitions: 1, sessionDurationMs: 60000 } });
  beforeEach(async () => {
    localStorage.clear();
    auth = { uid: signal<string | null>(null), ready: signal(false), error: signal(false) };
    await TestBed.configureTestingModule({ imports: [App], providers: [{ provide: AuthState, useValue: auth }] }).compileComponents();
  });
  it('não mostra atividades durante carregamento, sem login ou em falha', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('#atividade')).toBeNull();
    expect(el.textContent).toContain('Verificando acesso');
    auth.ready.set(true);
    await fixture.whenStable();
    expect(el.querySelector('#salvas')).toBeNull();
    expect(el.textContent).toContain('Suas atividades ficam disponíveis');
    auth.error.set(true);
    await fixture.whenStable();
    expect(el.querySelector('#atividade')).toBeNull();
  });
  it('isola contas e limpa a tela no logout', async () => {
    localStorage.setItem(`${key}:alice`, JSON.stringify([plan('Plano Alice')]));
    localStorage.setItem(`${key}:bob`, JSON.stringify([plan('Plano Bob')]));
    const fixture = TestBed.createComponent(App);
    const el = fixture.nativeElement as HTMLElement;
    auth.uid.set('alice'); auth.ready.set(true);
    await fixture.whenStable();
    expect(el.querySelector('#salvas')?.textContent).toContain('Plano Alice');
    auth.uid.set('bob');
    await fixture.whenStable();
    expect(el.querySelector('#salvas')?.textContent).toContain('Plano Bob');
    expect(el.textContent).not.toContain('Plano Alice');
    auth.uid.set(null);
    await fixture.whenStable();
    expect(el.querySelector('#salvas')).toBeNull();
    expect(el.querySelector('#displayName')).toBeNull();
  });
  it('preserva os registros antigos sem atribuí-los à primeira conta', async () => {
    const legacy = JSON.stringify([plan('Plano legado')]);
    localStorage.setItem(key, legacy);
    auth.uid.set('alice'); auth.ready.set(true);
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    expect(fixture.nativeElement.textContent).not.toContain('Plano legado');
    expect(localStorage.getItem(key)).toBe(legacy);
  });
  it('salva somente no espaço da conta conectada', async () => {
    auth.uid.set('alice'); auth.ready.set(true);
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    const input = el.querySelector('#displayName') as HTMLInputElement;
    input.value = 'Demonstração'; input.dispatchEvent(new Event('input'));
    await fixture.whenStable();
    el.querySelector('form')!.dispatchEvent(new Event('submit', { cancelable: true }));
    await fixture.whenStable();
    expect(JSON.parse(localStorage.getItem(`${key}:alice`)!).length).toBe(1);
    expect(localStorage.getItem(key)).toBeNull();
    expect(localStorage.getItem(`${key}:bob`)).toBeNull();
  });
});

