import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideRouter } from "@angular/router";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { AuthState } from "./auth-state";
import { Topbar } from "./topbar";

type TestUser = {
  uid: string;
  email: string;
  emailVerified: boolean;
  reload?: () => Promise<void>;
  getIdToken?: (forceRefresh: boolean) => Promise<string>;
};

const mocks = vi.hoisted(() => ({
  auth: { currentUser: null as TestUser | null },
  listener: undefined as ((user: TestUser | null) => void) | undefined,
  login: vi.fn(),
  register: vi.fn(),
  reset: vi.fn(),
  verify: vi.fn(),
}));
vi.mock("firebase/app", () => ({
  getApps: () => [{}],
  initializeApp: vi.fn(),
}));
vi.mock("firebase/auth", () => ({
  getAuth: () => mocks.auth,
  browserSessionPersistence: {},
  setPersistence: async () => {},
  onIdTokenChanged: (
    _auth: unknown,
    callback: (user: TestUser | null) => void,
  ) => {
    mocks.listener = callback;
    queueMicrotask(() => callback(mocks.auth.currentUser));
    return () => {
      mocks.listener = undefined;
    };
  },
  signInWithEmailAndPassword: mocks.login,
  createUserWithEmailAndPassword: mocks.register,
  sendPasswordResetEmail: mocks.reset,
  sendEmailVerification: mocks.verify,
  signOut: async () => {
    mocks.auth.currentUser = null;
  },
}));

describe("Fluxo de acesso", () => {
  let fixture: ComponentFixture<Topbar>;
  let root: HTMLElement;
  const field = (name: string) =>
    root.querySelector<HTMLInputElement>('[name="' + name + '"]')!;
  const input = (name: string, value: string) => {
    field(name).value = value;
  };
  const click = (id: string) =>
    root.querySelector<HTMLButtonElement>("#" + id)!.click();
  const submit = () =>
    root
      .querySelector("form")!
      .dispatchEvent(new SubmitEvent("submit", { cancelable: true }));
  const render = async () => {
    fixture.detectChanges();
    await fixture.whenStable();
  };
  const waitForRender = (check: () => void) =>
    vi.waitFor(async () => {
      await render();
      check();
    });
  const message = () => root.querySelector("#message")!.textContent;

  beforeEach(async () => {
    vi.resetAllMocks();
    mocks.auth.currentUser = null;
    TestBed.configureTestingModule({
      imports: [Topbar],
      providers: [provideRouter([])],
    });
    await TestBed.inject(AuthState).initialize();
    fixture = TestBed.createComponent(Topbar);
    root = fixture.nativeElement;
    await waitForRender(() =>
      expect(root.querySelector("form")).not.toBeNull(),
    );
  });

  it("abre cadastro separado e exige senhas iguais", async () => {
    click("register");
    await render();
    input("email", "pessoa@example.com");
    input("password", "senha1234");
    input("confirmation", "outra1234");
    submit();
    await render();
    expect(root.querySelector("#title")!.textContent).toBe("Crie sua conta");
    expect(message()).toContain("senhas precisam ser iguais");
    expect(mocks.register).not.toHaveBeenCalled();
  });

  it("recuperação pede apenas e-mail e permite voltar para entrar", async () => {
    input("email", "pessoa@example.com");
    click("reset");
    await render();
    expect(field("password")).toBeNull();
    submit();
    await waitForRender(() =>
      expect(message()).toContain("Se houver uma conta"),
    );
    expect(mocks.reset).toHaveBeenCalledWith(mocks.auth, "pessoa@example.com");
    click("back");
    await render();
    expect(root.querySelector("#title")!.textContent).toBe("Acesse sua conta");
    expect(field("password").value).toBe("");
  });

  it("mostra erro de credenciais sem apagar o e-mail digitado", async () => {
    mocks.login.mockRejectedValue({ code: "auth/invalid-credential" });
    input("email", "pessoa@example.com");
    input("password", "senha");
    submit();
    await waitForRender(() =>
      expect(message()).toContain("E-mail ou senha incorretos"),
    );
    expect(field("email").value).toBe("pessoa@example.com");
  });

  it("evita envios duplicados enquanto aguarda a resposta", async () => {
    let resolve!: () => void;
    mocks.login.mockImplementation(
      () =>
        new Promise<void>((done) => {
          resolve = done;
        }),
    );
    input("email", "pessoa@example.com");
    input("password", "senha");
    submit();
    submit();
    await render();
    expect(mocks.login).toHaveBeenCalledExactlyOnceWith(
      mocks.auth,
      "pessoa@example.com",
      "senha",
    );
    expect(root.querySelector<HTMLButtonElement>("#submit")!.disabled).toBe(
      true,
    );
    resolve();
    await waitForRender(() =>
      expect(root.querySelector<HTMLButtonElement>("#submit")!.disabled).toBe(
        false,
      ),
    );
  });

  it("preserva o erro de envio de verificação quando o cadastro abre a conta compacta", async () => {
    mocks.register.mockImplementation(async () => {
      mocks.auth.currentUser = {
        uid: "nova",
        email: "pessoa@example.com",
        emailVerified: false,
      };
      mocks.listener?.(mocks.auth.currentUser);
      return { user: mocks.auth.currentUser };
    });
    let failVerification!: (error: unknown) => void;
    mocks.verify.mockImplementation(
      () =>
        new Promise<void>((_, reject) => {
          failVerification = reject;
        }),
    );
    click("register");
    await render();
    input("email", "pessoa@example.com");
    input("password", "senha1234");
    input("confirmation", "senha1234");
    submit();
    await waitForRender(() =>
      expect(
        root.querySelector("app-account.compact #verification"),
      ).not.toBeNull(),
    );
    failVerification({ code: "auth/network-request-failed" });
    await waitForRender(() => expect(message()).toContain("Conta criada, mas"));
    expect(root.querySelector("form")).toBeNull();
  });

  it("atualiza a confirmação de e-mail e volta ao formulário ao sair", async () => {
    const user = {
      uid: "nova",
      email: "pessoa@example.com",
      emailVerified: false,
      reload: async () => {
        user.emailVerified = true;
      },
      getIdToken: vi.fn(async () => "token"),
    };
    mocks.login.mockImplementation(async () => {
      mocks.auth.currentUser = user;
      return { user };
    });
    input("email", "pessoa@example.com");
    input("password", "senha");
    submit();
    await waitForRender(() =>
      expect(root.querySelector("#verification")).not.toBeNull(),
    );

    click("refresh");
    await waitForRender(() => expect(message()).toContain("E-mail confirmado"));
    expect(user.getIdToken).toHaveBeenCalledWith(true);
    expect(root.querySelector("#verification")).toBeNull();

    click("logout");
    await waitForRender(() =>
      expect(root.querySelector("form")).not.toBeNull(),
    );
    expect(root.querySelector("#logout")).toBeNull();
    expect(field("password").value).toBe("");
  });
});
