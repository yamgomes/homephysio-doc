import { Component, inject, input, signal } from '@angular/core';
import { ConfirmationService } from '@openng/optimus-ui/api';
import { Button } from '@openng/optimus-ui/button';
import { ConfirmDialog } from '@openng/optimus-ui/confirmdialog';
import { Panel } from '@openng/optimus-ui/panel';
import { displayCode } from '@homephysio/contracts';
import { PatientStore } from './patient.store';

@Component({
  selector: 'app-patient-access-card',
  imports: [Button, ConfirmDialog, Panel],
  providers: [ConfirmationService],
  template: `
    <p-panel header="Código de acesso">
      @if (code(); as accessCode) {
        <div class="flex flex-wrap items-center gap-2">
          <code class="text-xl">{{ displayCode(accessCode) }}</code>
          <p-button label="Copiar código" icon="pi pi-copy" severity="secondary"
            (onClick)="copyCode()" />
        </div>
        <p class="my-3">Compartilhe o código com o paciente para que ele abra a terapia.</p>
        @if (copyFeedback(); as feedback) {
          <p class="mt-2" role="status" aria-live="polite">{{ feedback }}</p>
        }
        <p-button label="Gerar novo código" icon="pi pi-key" severity="secondary"
          (onClick)="confirmRotation()" [disabled]="store.busy()" />
      } @else {
        <p>Salve a terapia para gerar o código de acesso.</p>
      }
    </p-panel>
    <p-confirmdialog acceptLabel="Gerar novo código" rejectLabel="Cancelar" defaultFocus="reject" />
  `,
})
export class PatientAccessCard {
  readonly code = input.required<string>();
  protected readonly store = inject(PatientStore);
  protected readonly displayCode = displayCode;
  protected readonly copyFeedback = signal('');
  private readonly confirmation = inject(ConfirmationService);

  protected async copyCode() {
    try {
      await navigator.clipboard.writeText(this.code());
      this.copyFeedback.set('Código copiado.');
    } catch {
      this.copyFeedback.set('Não foi possível copiar. Selecione o código e copie manualmente.');
    }
  }

  protected confirmRotation() {
    const patient = this.store.selected();
    if (!patient || this.store.busy()) return;
    this.confirmation.confirm({
      header: 'Gerar novo código',
      message: 'O código anterior deixará de funcionar.',
      accept: () => {
        if (this.store.selected()?.id === patient.id) void this.store.rotate();
      },
    });
  }
}
