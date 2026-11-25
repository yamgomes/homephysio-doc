import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputNumber } from '@openng/optimus-ui/inputnumber';
import { InputText } from '@openng/optimus-ui/inputtext';
import { Select } from '@openng/optimus-ui/select';
import type { TherapyField } from '@homephysio/contracts';

@Component({
  selector: 'app-therapy-parameter',
  imports: [FormsModule, InputNumber, InputText, Select],
  template: `
    @let item = field();
    <div class="grid min-w-0 gap-1.5">
      <label class="font-semibold" [for]="item.key">{{ item.label }}</label>
      @if (item.kind === 'select') {
        <p-select [inputId]="item.key" [name]="item.key" [options]="item.options" optionLabel="label"
          optionValue="value" [ngModel]="value()" [ngModelOptions]="{ standalone: true }"
          (ngModelChange)="changed.emit($event)" [disabled]="disabled()" />
      } @else if (item.kind === 'list') {
        <input pInputText [id]="item.key" [name]="item.key" [placeholder]="item.placeholder"
          [maxlength]="item.maxLength" [ngModel]="value()" [ngModelOptions]="{ standalone: true }"
          (ngModelChange)="changed.emit($event)" [disabled]="disabled()" required>
      } @else {
        <p-inputnumber [inputId]="item.key" [name]="item.key" [min]="item.min" [max]="item.max"
          [step]="item.kind === 'integer' ? 1 : 10 ** -item.decimals" [maxFractionDigits]="item.decimals"
          [useGrouping]="false" locale="pt-BR" [ngModel]="value()" [ngModelOptions]="{ standalone: true }"
          (ngModelChange)="changed.emit($event)"
          [disabled]="disabled()" required />
      }
      @if (item.help) { <small class="text-[color:var(--p-text-muted-color,#64748b)]">{{ item.help }}</small> }
    </div>
  `,
})
export class TherapyParameter {
  readonly field = input.required<TherapyField>();
  readonly value = input.required<number | string | null>();
  readonly disabled = input(false);
  readonly changed = output<number | string | null>();
}
