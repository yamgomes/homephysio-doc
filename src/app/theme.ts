import { DOCUMENT, DestroyRef, Injectable, inject, signal } from '@angular/core';

type Theme = 'light' | 'dark';
const storageKey = 'homephysio-doc.theme';

@Injectable({ providedIn: 'root' })
export class ColorTheme {
  private readonly document = inject(DOCUMENT);
  private readonly window = this.document.defaultView;
  private readonly current = signal<Theme>('light');
  private preference?: Theme;
  readonly theme = this.current.asReadonly();

  constructor() {
    const system = this.window?.matchMedia?.('(prefers-color-scheme: dark)');
    try {
      const saved = this.window?.localStorage.getItem(storageKey);
      if (saved === 'light' || saved === 'dark') this.preference = saved;
    } catch {
      // A alternância continua disponível se o navegador bloquear o armazenamento.
    }
    this.apply(this.preference ?? (system?.matches ? 'dark' : 'light'));

    const followSystem = (event: MediaQueryListEvent) => {
      if (!this.preference) this.apply(event.matches ? 'dark' : 'light');
    };
    system?.addEventListener('change', followSystem);
    inject(DestroyRef).onDestroy(() => system?.removeEventListener('change', followSystem));
  }

  toggle() {
    const next = this.theme() === 'dark' ? 'light' : 'dark';
    this.preference = next;
    this.apply(next);
    try {
      this.window?.localStorage.setItem(storageKey, next);
    } catch {
      // Mantém a escolha em memória até o fim da página.
    }
  }

  private apply(theme: Theme) {
    this.document.documentElement.dataset['theme'] = theme;
    this.current.set(theme);
  }
}
