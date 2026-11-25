import {
  ChangeDetectorRef,
  Component,
  effect,
  inject,
  output,
  signal,
} from "@angular/core";
import { FormsModule } from "@angular/forms";
import type { GameId, TherapyField } from "@homephysio/contracts";
import {
  GAME_DEFINITIONS,
  defaultTherapy,
  intensityPreset,
  metricsForGame,
  validTherapy,
} from "@homephysio/contracts";
import { Button } from "@openng/optimus-ui/button";
import { Fluid } from "@openng/optimus-ui/fluid";
import { InputText } from "@openng/optimus-ui/inputtext";
import { Message } from "@openng/optimus-ui/message";
import { MultiSelect } from "@openng/optimus-ui/multiselect";
import { Select } from "@openng/optimus-ui/select";
import { PatientStore } from "./patient.store";
import { TherapyParameter } from "./therapy-parameter";

@Component({
  selector: "app-therapy-form",
  imports: [
    FormsModule,
    Button,
    InputText,
    Fluid,
    MultiSelect,
    Message,
    Select,
    TherapyParameter,
  ],
  templateUrl: "./therapy-form.html",
})
export class TherapyForm {
  readonly saved = output<void>();
  readonly cancelled = output<void>();
  protected readonly store = inject(PatientStore);
  protected readonly saveError = signal("");
  private readonly cdr = inject(ChangeDetectorRef);
  protected form = defaultTherapy();
  protected get metrics() {
    return metricsForGame(this.form.gameId);
  }
  protected readonly games = (Object.keys(GAME_DEFINITIONS) as GameId[]).map(
    (value) => ({
      value,
      label: GAME_DEFINITIONS[value].label,
    }),
  );

  protected get definition() {
    return GAME_DEFINITIONS[this.form.gameId];
  }

  constructor() {
    effect(() => {
      const patient = this.store.selected();
      this.form = patient?.therapy
        ? structuredClone(patient.therapy)
        : defaultTherapy();
      if (
        !this.definition.customIntensity &&
        this.form.intensity === "custom"
      ) {
        this.form.intensity = this.definition.defaults.intensity;
      }
      this.cdr.markForCheck();
    });
  }

  protected gameChanged(gameId: GameId) {
    if (
      !this.games.some((game) => game.value === gameId) ||
      gameId === this.form.gameId
    )
      return;
    const defaults = defaultTherapy(gameId);
    const previousChoices = metricsForGame(this.form.gameId);
    const choices = metricsForGame(gameId);
    const metrics = this.form.metrics.filter((value) =>
      choices.some((choice) => choice.value === value),
    );
    metrics.push(
      ...defaults.metrics.filter(
        (value) => !previousChoices.some((choice) => choice.value === value),
      ),
    );
    this.form = {
      ...defaults,
      metrics: metrics.length ? metrics : defaults.metrics,
    };
  }

  protected parameterChanged(
    field: TherapyField,
    value: number | string | null,
  ) {
    if (field.key === "intensity") {
      const option = field.options.find((option) => option.value === value);
      if (!option) return;
      if (option.value === "custom") this.form.intensity = "custom";
      else
        Object.assign(
          this.form,
          intensityPreset(option.value, this.form.gameId),
        );
      return;
    }
    Object.assign(this.form, { [field.key]: value });
    if (field.customizesIntensity && this.definition.customIntensity)
      this.form.intensity = "custom";
  }

  protected async save() {
    if (this.store.busy()) return;
    this.saveError.set("");
    const therapy = {
      ...this.form,
      title: this.form.title.trim(),
      metrics: [...(this.form.metrics ?? [])],
    };
    for (const field of this.definition.fields) {
      if (field.kind === "list" && typeof therapy[field.key] === "string") {
        therapy[field.key] = therapy[field.key]
          .split(field.separator)
          .map((item) => item.trim())
          .join(field.separator);
      }
    }
    if (!validTherapy(therapy)) {
      this.saveError.set(
        "Confira os parâmetros da terapia e selecione pelo menos uma métrica.",
      );
      return;
    }
    if (await this.store.save(therapy)) this.saved.emit();
    else
      this.saveError.set(
        this.store.message() ||
          "Não foi possível salvar o plano. Tente novamente.",
      );
  }
}
