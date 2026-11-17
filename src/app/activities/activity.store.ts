import { Injectable, effect, inject, signal } from '@angular/core';
import { AuthState } from '../auth-state';
import type { Plan } from './activity.model';
const key = 'homephysio.professional.demo.v1';
@Injectable({ providedIn: 'root' })
export class ActivityStore {
  private readonly authState = inject(AuthState);
  readonly loadedUid = signal<string | null>(null);
  readonly plans = signal<Plan[]>([]);
  readonly message = signal('');
  readonly storageError = signal(false);
  constructor() {
    effect(() => {
      const uid = this.authState.uid();
      this.plans.set([]); this.message.set(''); this.storageError.set(false); this.loadedUid.set(null);
      if (!uid) return;
      try {
        const data: unknown = JSON.parse(localStorage.getItem(`${key}:${uid}`) ?? '[]');
        if (!Array.isArray(data) || !data.every(this.validSavedPlan)) throw Error('Dados inválidos');
        this.plans.set(data);
      } catch { this.storageError.set(true); this.message.set('Não foi possível ler os dados locais. Eles foram preservados.'); }
      this.loadedUid.set(uid);
    });
  }
  currentUid(): string | null { return this.authState.uid(); }
  save(plan: Plan): void {
    const uid = this.authState.uid();
    if (!uid || this.loadedUid() !== uid) return;
    if (this.storageError()) throw Error('Os dados locais precisam ser recuperados antes de salvar.');
    const updated = [...this.plans(), plan];
    localStorage.setItem(`${key}:${uid}`, JSON.stringify(updated));
    this.plans.set(updated);
    this.message.set('Atividade salva somente neste navegador.');
  }
  private validSavedPlan(value: unknown): value is Plan {
    if (!value || typeof value !== "object") return false;
    const p = value as Partial<Plan>;
    return (
      typeof p.id === "string" &&
      typeof p.title === "string" &&
      typeof p.displayName === "string" &&
      (p.gameId === "shoulder" || p.gameId === "surfing") &&
      !!p.config &&
      (Array.isArray(p.config.targets) ||
        (p.gameId === 'shoulder' && p.config.targets === undefined))
    );
  }
  download(plan: Plan): void {
    if (
      !this.authState.uid() ||
      this.loadedUid() !== this.authState.uid() ||
      !this.plans().includes(plan)
    )
      return;
    const url = URL.createObjectURL(
      new Blob([JSON.stringify(plan, null, 2)], { type: "application/json" }),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = `atividade-${plan.id}.json`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
}
