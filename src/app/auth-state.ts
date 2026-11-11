import { Injectable, OnDestroy, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthState implements OnDestroy {
  readonly uid = signal<string | null>(null);
  readonly ready = signal(false);
  readonly error = signal(false);
  private disposed = false;
  private unsubscribe?: () => void;

  constructor() {
    void Promise.all([import('./account'), import('firebase/auth')]).then(([{ auth }, { onAuthStateChanged }]) => {
      if (this.disposed) return;
      this.unsubscribe = onAuthStateChanged(auth, user => {
        this.uid.set(user?.uid ?? null);
        this.ready.set(true);
      }, () => this.fail());
    }).catch(() => this.fail());
  }
  private fail() {
    if (this.disposed) return;
    this.uid.set(null);
    this.error.set(true);
    this.ready.set(true);
  }
  ngOnDestroy() { this.disposed = true; this.unsubscribe?.(); }
}
