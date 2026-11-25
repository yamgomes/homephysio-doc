import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { AuthState } from './auth-state';
import { Topbar } from './topbar';

describe('Tema no cabeçalho', () => {
  const storageKey = 'homephysio-doc.theme';
  let system: EventTarget;

  beforeEach(() => {
    system = Object.assign(new EventTarget(), { matches: true });
    vi.stubGlobal('matchMedia', vi.fn(() => system));
    TestBed.configureTestingModule({
      imports: [Topbar],
      providers: [provideRouter([]), { provide: AuthState, useValue: {
        uid: signal(null), user: signal(null), pending: signal(false), message: signal(null),
        ready: signal(false), error: signal(false),
      } }],
    });
  });

  afterEach(() => {
    localStorage.removeItem(storageKey);
    delete document.documentElement.dataset['theme'];
    vi.unstubAllGlobals();
  });

  it('acompanha o sistema até o usuário alternar o tema', () => {
    const fixture = TestBed.createComponent(Topbar);
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    expect(document.documentElement.dataset['theme']).toBe('dark');
    expect(button.textContent?.trim()).toBe('Tema claro');

    system.dispatchEvent(Object.assign(new Event('change'), { matches: false }));
    fixture.detectChanges();
    expect(button.textContent?.trim()).toBe('Tema escuro');

    button.click();
    system.dispatchEvent(Object.assign(new Event('change'), { matches: false }));
    fixture.detectChanges();
    expect(button.textContent?.trim()).toBe('Tema claro');
    expect(document.documentElement.dataset['theme']).toBe('dark');
    expect(localStorage.getItem(storageKey)).toBe('dark');

    button.click();
    fixture.detectChanges();
    expect(button.textContent?.trim()).toBe('Tema escuro');
    expect(document.documentElement.dataset['theme']).toBe('light');
  });

  it('restaura o tema claro salvo mesmo quando o sistema está escuro', () => {
    localStorage.setItem(storageKey, 'light');
    const fixture = TestBed.createComponent(Topbar);
    fixture.detectChanges();
    expect(document.documentElement.dataset['theme']).toBe('light');
    expect(fixture.nativeElement.querySelector('button').textContent.trim()).toBe('Tema escuro');
  });
});
