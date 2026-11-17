import { Injectable, OnDestroy, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthState implements OnDestroy {
  readonly uid = signal<string | null>(null);
  readonly emailVerified = signal(false);
  readonly ready = signal(false);
  readonly error = signal(false);
  private disposed = false;
  private unsubscribe?: () => void;

  constructor() {
    void Promise.all([import('./account'), import('firebase/auth')]).then(([{ auth }, { onIdTokenChanged }]) => {
      if (this.disposed) return;
      this.unsubscribe = onIdTokenChanged(auth, user => {
        this.uid.set(user?.uid ?? null);
        this.emailVerified.set(user?.emailVerified ?? false);
        this.ready.set(true);
      }, () => this.fail());
    }).catch(() => this.fail());
  }
  private fail() {
    if (this.disposed) return;
    this.uid.set(null);
    this.emailVerified.set(false);
    this.error.set(true);
    this.ready.set(true);
  }
  ngOnDestroy() { this.disposed = true; this.unsubscribe?.(); }
}
