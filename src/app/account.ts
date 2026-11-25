import { Component, ElementRef, inject, input, signal, viewChild } from '@angular/core';
import { AuthState } from './auth-state';

type AccountMode = 'login' | 'register' | 'reset';

@Component({
  selector: 'app-account',
  templateUrl: './account.html',
  styleUrl: './account.css',
  host: { '[class.compact]': 'compact()' },
})
export class Account {
  protected readonly auth = inject(AuthState);
  readonly compact = input(false);
  protected readonly mode = signal<AccountMode>('login');
  protected readonly passwordVisible = signal(false);
  protected readonly confirmationError = signal(false);

  private readonly form = viewChild<ElementRef<HTMLFormElement>>('form');
  private readonly emailField = viewChild<ElementRef<HTMLInputElement>>('emailField');
  private readonly confirmationField = viewChild<ElementRef<HTMLInputElement>>('confirmationField');
  private readonly status = viewChild<ElementRef<HTMLParagraphElement>>('status');

  protected setMode(mode: AccountMode) {
    this.mode.set(mode);
    this.passwordVisible.set(false);
    this.confirmationError.set(false);
    this.auth.clearMessage();
    const emailField = this.emailField()?.nativeElement;
    const email = emailField?.value ?? '';
    this.form()?.nativeElement.reset();
    if (emailField) {
      emailField.value = email;
      emailField.focus();
    }
  }

  protected async submit(event: SubmitEvent, form: HTMLFormElement) {
    event.preventDefault();
    if (this.auth.pending() || !form.reportValidity()) return;
    const fields = new FormData(form);
    const email = String(fields.get('email') ?? '').trim();
    const password = String(fields.get('password') ?? '');
    this.confirmationError.set(false);

    if (this.mode() === 'register' && password !== fields.get('confirmation')) {
      this.confirmationError.set(true);
      this.confirmationField()?.nativeElement.focus();
      return;
    }

    switch (this.mode()) {
      case 'reset': await this.auth.resetPassword(email); break;
      case 'register': await this.auth.register(email, password); break;
      case 'login': await this.auth.login(email, password); break;
    }
    this.focusStatus();
  }

  protected async logout() {
    await this.auth.logout();
    if (!this.auth.user()) this.setMode('login');
    this.focusStatus();
  }

  protected async refreshVerification() {
    await this.auth.refreshVerification();
    this.focusStatus();
  }

  protected async resendVerification() {
    await this.auth.resendVerification();
    this.focusStatus();
  }

  private focusStatus() {
    this.status()?.nativeElement.focus();
  }
}
