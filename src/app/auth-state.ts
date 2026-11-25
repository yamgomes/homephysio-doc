import { Injectable, OnDestroy, computed, signal } from "@angular/core";
import type { User } from "firebase/auth";

type FirebaseAuth = typeof import("./firebase-auth");

@Injectable({ providedIn: "root" })
export class AuthState implements OnDestroy {
  private firebase?: Promise<FirebaseAuth>;
  private readonly account = signal<Pick<
    User,
    "uid" | "email" | "emailVerified"
  > | null>(null);
  private readonly busy = signal(false);
  private readonly feedback = signal<{ text: string; error: boolean } | null>(
    null,
  );
  private disposed = false;
  private unsubscribe?: () => void;

  readonly user = this.account.asReadonly();
  readonly uid = computed(() => this.user()?.uid ?? null);
  readonly emailVerified = computed(() => this.user()?.emailVerified ?? false);
  readonly ready = signal(false);
  readonly error = signal(false);
  readonly pending = this.busy.asReadonly();
  readonly message = this.feedback.asReadonly();

  initialize() {
    if (this.firebase) return this.firebase;

    this.firebase = import("./firebase-auth");
    void this.firebase
      .then(({ auth, onIdTokenChanged, persistenceReady }) => {
        void persistenceReady.catch(() => {
          if (!this.disposed)
            this.feedback.set({
              text: "Não foi possível preparar o acesso neste navegador.",
              error: true,
            });
        });
        if (this.disposed) return;
        this.unsubscribe = onIdTokenChanged(
          auth,
          (user) => {
            this.updateUser(user);
            this.ready.set(true);
          },
          () => this.fail(),
        );
      })
      .catch(() => this.fail());
    return this.firebase;
  }

  clearMessage() {
    this.feedback.set(null);
  }

  login(email: string, password: string) {
    return this.run(({ auth, signInWithEmailAndPassword }) =>
      signInWithEmailAndPassword(auth, email, password),
    );
  }

  register(email: string, password: string) {
    return this.run(
      async ({
        auth,
        createUserWithEmailAndPassword,
        sendEmailVerification,
      }) => {
        const result = await createUserWithEmailAndPassword(
          auth,
          email,
          password,
        );
        try {
          await sendEmailVerification(result.user);
        } catch {
          throw new Error(
            "Conta criada, mas o e-mail de verificação não pôde ser enviado. Use “Reenviar e-mail”.",
          );
        }
      },
      "Conta criada. Abra seu e-mail para confirmar o cadastro.",
    );
  }

  resetPassword(email: string) {
    return this.run(
      ({ auth, sendPasswordResetEmail }) => sendPasswordResetEmail(auth, email),
      "Se houver uma conta com esse e-mail, você receberá um link para redefinir a senha. Confira também o spam. Depois, volte para entrar.",
    );
  }

  logout() {
    return this.run(({ auth, signOut }) => signOut(auth));
  }

  resendVerification() {
    return this.run(async ({ auth, sendEmailVerification }) => {
      if (auth.currentUser) await sendEmailVerification(auth.currentUser);
    }, "Verificação solicitada. Confira seu e-mail.");
  }

  refreshVerification() {
    return this.run(async ({ auth }) => {
      await auth.currentUser?.reload();
      await auth.currentUser?.getIdToken(true);
      if (!auth.currentUser?.emailVerified) {
        throw new Error(
          "Seu e-mail ainda não foi confirmado. Abra o link recebido e tente novamente.",
        );
      }
    }, "E-mail confirmado.");
  }

  async verifiedSession() {
    const { auth } = await this.initialize();
    await auth.authStateReady();
    const user = auth.currentUser;
    if (!user) throw new Error("Entre na sua conta.");
    await user.reload();
    await user.getIdToken(true);
    if (!user.emailVerified)
      throw new Error("Confirme seu e-mail antes de gerenciar pacientes.");
    return { uid: user.uid, app: auth.app };
  }

  private async run(
    action: (firebase: FirebaseAuth) => Promise<unknown>,
    success = "",
  ) {
    if (this.pending()) return;
    this.busy.set(true);
    this.feedback.set({ text: "Aguarde…", error: false });
    let firebase: FirebaseAuth | undefined;
    try {
      firebase = await this.initialize();
      await firebase.persistenceReady;
      await action(firebase);
      this.feedback.set(success ? { text: success, error: false } : null);
    } catch (error) {
      this.feedback.set({ text: accessError(error), error: true });
    } finally {
      if (firebase) this.updateUser(firebase.auth.currentUser);
      this.busy.set(false);
    }
  }

  private updateUser(user: User | null) {
    if (!this.pending() && this.uid() !== (user?.uid ?? null))
      this.clearMessage();
    this.account.set(
      user
        ? {
            uid: user.uid,
            email: user.email,
            emailVerified: user.emailVerified,
          }
        : null,
    );
  }

  private fail() {
    if (this.disposed) return;
    this.account.set(null);
    this.error.set(true);
    this.ready.set(true);
  }

  ngOnDestroy() {
    this.disposed = true;
    this.unsubscribe?.();
  }
}

function accessError(error: unknown): string {
  const code =
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    typeof error.code === "string"
      ? error.code
      : undefined;
  const messages: Record<string, string> = {
    "auth/invalid-credential":
      "E-mail ou senha incorretos. Confira os dados ou recupere sua senha.",
    "auth/wrong-password":
      "E-mail ou senha incorretos. Confira os dados ou recupere sua senha.",
    "auth/user-not-found":
      "E-mail ou senha incorretos. Confira os dados ou recupere sua senha.",
    "auth/invalid-email": "Informe um e-mail válido.",
    "auth/email-already-in-use":
      "Não foi possível criar a conta com esse e-mail. Tente entrar ou recuperar a senha.",
    "auth/weak-password":
      "Escolha uma senha mais forte, com pelo menos 8 caracteres.",
    "auth/password-does-not-meet-requirements":
      "A senha não atende aos requisitos de segurança. Use uma senha mais forte.",
    "auth/too-many-requests":
      "Muitas tentativas em pouco tempo. Aguarde alguns minutos antes de tentar novamente.",
    "auth/network-request-failed":
      "Não foi possível conectar. Confira sua conexão e tente novamente.",
    "auth/operation-not-allowed":
      "O acesso por e-mail está indisponível no momento.",
    "permission-denied":
      "Ação não autorizada. Confirme seu e-mail e confira o vínculo da conta.",
  };
  return code
    ? (messages[code] ??
        "Não foi possível concluir. Tente novamente em instantes.")
    : error instanceof Error
      ? error.message
      : "Não foi possível concluir. Tente novamente.";
}
