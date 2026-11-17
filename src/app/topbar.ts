import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Toolbar } from '@openng/optimus-ui/toolbar';
import { AuthState } from './auth-state';

@Component({
  selector: 'app-topbar',
  imports: [RouterLink, Toolbar],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <header class="mx-auto max-w-7xl px-4 pt-4 md:px-8 lg:px-10">
      <p-toolbar>
        <ng-template #start><a class="font-bold" routerLink="/pacientes">Homephysio Doc</a></ng-template>
        <ng-template #end>
          @if (auth.uid()) { <homephysio-account audience="professional" compact /> }
        </ng-template>
      </p-toolbar>
      @if (!auth.uid()) { <homephysio-account audience="professional" /> }
    </header>
  `,
})
export class Topbar {
  protected readonly auth = inject(AuthState);
}
