import { ChangeDetectorRef, Component, effect, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Button } from '@openng/optimus-ui/button';
import { InputText } from '@openng/optimus-ui/inputtext';
import { Fluid } from '@openng/optimus-ui/fluid';
import { MultiSelect } from '@openng/optimus-ui/multiselect';
import { Panel } from '@openng/optimus-ui/panel';
import { Select } from '@openng/optimus-ui/select';
import { GAME_DEFINITIONS, defaultTherapy, intensityPreset, METRICS, validTherapy } from '@homephysio/contracts';
import type { GameId, TherapyField } from '@homephysio/contracts';
import { PatientStore } from './patient.store';
import { TherapyParameter } from './therapy-parameter';

@Component({
  selector: 'app-therapy-form',
  imports: [FormsModule, Button, InputText, Fluid, MultiSelect, Panel, Select, TherapyParameter],
  templateUrl: './therapy-form.html',
})
export class TherapyForm {
  protected readonly store = inject(PatientStore);
  private readonly cdr = inject(ChangeDetectorRef);
  protected form = defaultTherapy();
  protected readonly metrics = METRICS;
  protected readonly games = (Object.keys(GAME_DEFINITIONS) as GameId[]).map(value => ({
    value, label: GAME_DEFINITIONS[value].label,
  }));

  protected get definition() {
    return GAME_DEFINITIONS[this.form.gameId];
  }

  constructor() {
    effect(() => {
      const patient = this.store.selected();
      this.form = patient?.therapy ? structuredClone(patient.therapy) : defaultTherapy();
      if (!this.definition.customIntensity && this.form.intensity === 'custom') {
        this.form.intensity = this.definition.defaults.intensity;
      }
      this.cdr.markForCheck();
    });
  }

  protected gameChanged(gameId: GameId) {
    if (!this.games.some(game => game.value === gameId) || gameId === this.form.gameId) return;
    this.form = { ...defaultTherapy(gameId), metrics: this.form.metrics };
  }

  protected parameterChanged(field: TherapyField, value: number | string | null) {
    if (field.key === 'intensity') {
      const option = field.options.find(option => option.value === value);
      if (!option) return;
      if (option.value === 'custom') this.form.intensity = 'custom';
      else Object.assign(this.form, intensityPreset(option.value, this.form.gameId));
      return;
    }
    Object.assign(this.form, { [field.key]: value });
    if (field.customizesIntensity && this.definition.customIntensity) this.form.intensity = 'custom';
  }

  protected async save() {
    const therapy = { ...this.form, title: this.form.title.trim(), metrics: [...(this.form.metrics ?? [])] };
    for (const field of this.definition.fields) {
      if (field.kind === 'list' && typeof therapy[field.key] === 'string') {
        therapy[field.key] = therapy[field.key].split(field.separator).map(item => item.trim()).join(field.separator);
      }
    }
    if (!validTherapy(therapy)) {
      this.store.message.set('Confira os parâmetros da terapia e selecione pelo menos uma métrica.');
      return;
    }
    await this.store.save(therapy);
  }
}
