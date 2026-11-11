import { beforeEach, afterEach, describe, expect, it, vi } from 'vitest';
const mocks = vi.hoisted(() => ({
  auth: { currentUser: null as any },
  login: vi.fn(), register: vi.fn(), reset: vi.fn(), verify: vi.fn(),
}));
vi.mock('firebase/app', () => ({ getApps: () => [{}], initializeApp: vi.fn() }));
vi.mock('firebase/firestore', () => ({ getFirestore: () => ({}), doc: vi.fn(), getDoc: vi.fn(), setDoc: vi.fn(), deleteDoc: vi.fn(), serverTimestamp: vi.fn(), getDocs: vi.fn(), collection: vi.fn(), query: vi.fn(), where: vi.fn(), limit: vi.fn() }));
vi.mock('firebase/auth', () => ({
  getAuth: () => mocks.auth, browserSessionPersistence: {}, setPersistence: async () => {},
  onAuthStateChanged: (_auth: unknown, callback: () => void) => { queueMicrotask(callback); return () => {}; },
  signInWithEmailAndPassword: mocks.login, createUserWithEmailAndPassword: mocks.register,
  sendPasswordResetEmail: mocks.reset, sendEmailVerification: mocks.verify,
  signOut: async () => { mocks.auth.currentUser = null; },
}));
import './account';

describe('Fluxo de acesso', () => {
  let element: HTMLElement, root: ShadowRoot;
  const input = (name: string, value: string) => { (root.querySelector(`[name="${name}"]`) as HTMLInputElement).value = value; };
  const click = (id: string) => (root.querySelector(`#${id}`) as HTMLButtonElement).click();
  const submit = () => root.querySelector('form')!.dispatchEvent(new Event('submit', { cancelable: true }));
  beforeEach(async () => {
    vi.resetAllMocks(); mocks.auth.currentUser = null;
    element = document.createElement('homephysio-account'); document.body.append(element);
    root = element.shadowRoot!; await Promise.resolve();
  });
  afterEach(() => element.remove());
  it('abre cadastro separado e exige senhas iguais', () => {
    click('register'); input('email', 'pessoa@example.com'); input('password', 'senha1234'); input('confirmation', 'outra1234');
    submit();
    expect(root.querySelector('#title')!.textContent).toBe('Crie sua conta');
    expect(root.querySelector('#message')!.textContent).toContain('senhas precisam ser iguais');
    expect(mocks.register).not.toHaveBeenCalled();
  });
  it('recuperação pede apenas e-mail e permite voltar para entrar', async () => {
    input('email', 'pessoa@example.com'); click('reset'); submit();
    await vi.waitFor(() => expect(mocks.reset).toHaveBeenCalledWith(mocks.auth, 'pessoa@example.com'));
    await vi.waitFor(() => expect(root.querySelector('#message')!.textContent).toContain('Se houver uma conta'));
    expect((root.querySelector('[name="password"]') as HTMLInputElement).disabled).toBe(true);
    click('back'); expect(root.querySelector('#title')!.textContent).toBe('Acesse sua conta');
  });
  it('mostra erro de credenciais sem apagar o e-mail digitado', async () => {
    mocks.login.mockRejectedValue({ code: 'auth/invalid-credential' });
    input('email', 'pessoa@example.com'); input('password', 'senha'); submit();
    await vi.waitFor(() => expect(root.querySelector('#message')!.textContent).toContain('E-mail ou senha incorretos'));
    expect((root.querySelector('[name="email"]') as HTMLInputElement).value).toBe('pessoa@example.com');
  });
  it('evita envios duplicados enquanto aguarda a resposta', async () => {
    let resolve!: () => void;
    mocks.login.mockImplementation(() => new Promise<void>(r => { resolve = r; }));
    input('email', 'pessoa@example.com'); input('password', 'senha'); submit(); submit();
    await vi.waitFor(() => expect(mocks.login).toHaveBeenCalledTimes(1));
    expect((root.querySelector('#submit') as HTMLButtonElement).disabled).toBe(true);
    resolve(); await vi.waitFor(() => expect((root.querySelector('#submit') as HTMLButtonElement).disabled).toBe(false));
  });
  it('explica que a conta foi criada mesmo se o envio de verificação falhar', async () => {
    mocks.register.mockImplementation(async () => { mocks.auth.currentUser = { uid: 'nova', email: 'pessoa@example.com', emailVerified: false }; return { user: mocks.auth.currentUser }; });
    mocks.verify.mockRejectedValue({ code: 'auth/network-request-failed' });
    click('register'); input('email', 'pessoa@example.com'); input('password', 'senha1234'); input('confirmation', 'senha1234'); submit();
    await vi.waitFor(() => expect(root.querySelector('#message')!.textContent).toContain('Conta criada, mas'));
    expect((root.querySelector('#verification') as HTMLElement).hidden).toBe(false);
    expect(root.querySelector('form')!.hidden).toBe(true);
  });
});
