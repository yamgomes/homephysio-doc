import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonDirective } from '@openng/optimus-ui/button';
import { Toolbar } from '@openng/optimus-ui/toolbar';
import { Account } from './account';
import { AuthState } from './auth-state';
import { ColorTheme } from './theme';

@Component({
  selector: 'app-topbar',
  imports: [RouterLink, ButtonDirective, Toolbar, Account],
  template: `
    <header class="mx-auto max-w-7xl px-4 pt-4 md:px-8 lg:px-10">
      <p-toolbar>
        <ng-template #start><a class="font-bold" routerLink="/pacientes">Homephysio Doc</a></ng-template>
        <ng-template #end>
          <div class="flex flex-wrap items-center justify-end gap-3">
            <button pButton type="button" severity="secondary" [outlined]="true"
              [icon]="colorTheme.theme() === 'dark' ? 'pi pi-sun' : 'pi pi-moon'"
              (click)="colorTheme.toggle()">{{ colorTheme.theme() === 'dark' ? 'Tema claro' : 'Tema escuro' }}</button>
            @if (auth.uid()) { <app-account [compact]="true" /> }
          </div>
        </ng-template>
      </p-toolbar>
      @if (!auth.uid()) { <app-account /> }
    </header>
  `,
})
export class Topbar {
  protected readonly auth = inject(AuthState);
  protected readonly colorTheme = inject(ColorTheme);
}
