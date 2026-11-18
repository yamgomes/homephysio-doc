import { Component, inject, input } from '@angular/core';
import { ConfirmationService, MessageService } from '@openng/optimus-ui/api';
import { Button } from '@openng/optimus-ui/button';
import { ConfirmDialog } from '@openng/optimus-ui/confirmdialog';
import { Panel } from '@openng/optimus-ui/panel';
import { Toast } from '@openng/optimus-ui/toast';
import { displayCode } from '@homephysio/contracts';
import { PatientStore } from './patient.store';

@Component({
  selector: 'app-patient-access-card',
  imports: [Button, ConfirmDialog, Panel, Toast],
  providers: [ConfirmationService, MessageService],
  template: `
    <p-panel header="Código de acesso">
      @if (code(); as accessCode) {
        <div class="flex flex-wrap items-center gap-2">
          <code class="text-xl">{{ displayCode(accessCode) }}</code>
          <p-button label="Copiar código" icon="pi pi-copy" severity="secondary"
            (onClick)="copyCode()" />
          <p-button label="Copiar link para o paciente" icon="pi pi-link" severity="secondary"
            (onClick)="copyLink()" />
        </div>
        <p class="my-3">Compartilhe o link para abrir a terapia diretamente ou envie o código.</p>
        <p-button label="Gerar novo código" icon="pi pi-key" severity="secondary"
          (onClick)="confirmRotation()" [disabled]="store.busy()" />
      } @else {
        <p>Salve a terapia para gerar o código de acesso.</p>
      }
    </p-panel>
    <p-toast position="bottom-right" [breakpoints]="{'480px': { width: 'calc(100% - 2rem)', right: '1rem' }}" />
    <p-confirmdialog acceptLabel="Gerar novo código" rejectLabel="Cancelar" defaultFocus="reject" />
  `,
})
export class PatientAccessCard {
  readonly code = input.required<string>();
  protected readonly store = inject(PatientStore);
  protected readonly displayCode = displayCode;
  private readonly confirmation = inject(ConfirmationService);
  private readonly messages = inject(MessageService);

  protected async copyCode() {
    try {
      await navigator.clipboard.writeText(this.code());
      this.messages.clear();
      this.messages.add({ severity: 'success', summary: 'Código copiado.', life: 4000 });
    } catch {
      this.messages.clear();
      this.messages.add({
        severity: 'error',
        summary: 'Não foi possível copiar.',
        detail: 'Selecione o código e copie manualmente.',
        life: 8000,
      });
    }
  }

  protected async copyLink() {
    const url = new URL('https://yamgomes.github.io/virtualter-3/');
    url.searchParams.set('code', this.code());
    try {
      await navigator.clipboard.writeText(url.toString());
      this.messages.clear();
      this.messages.add({ severity: 'success', summary: 'Link copiado.', detail: 'O paciente abrirá a terapia diretamente pelo link.', life: 4000 });
    } catch {
      this.messages.clear();
      this.messages.add({
        severity: 'error',
        summary: 'Não foi possível copiar o link.',
        detail: url.toString(),
        life: 10000,
      });
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
