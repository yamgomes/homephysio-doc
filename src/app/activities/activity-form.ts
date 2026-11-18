import { ChangeDetectorRef, Component, effect, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Button } from "@openng/optimus-ui/button";
import { InputText } from "@openng/optimus-ui/inputtext";
import { Select } from "@openng/optimus-ui/select";
import type { Game, Plan, Side } from "./activity.model";
import { ActivityStore } from "./activity.store";

@Component({
  selector: "app-activity-form",
  imports: [FormsModule, Button, InputText, Select],
  templateUrl: "./activity-form.html",
  styleUrl: "./activity-form.css",
})
export class ActivityForm {
  protected readonly store = inject(ActivityStore);
  private readonly changeDetector = inject(ChangeDetectorRef);
  protected game: Game = "shoulder";
  protected side: Side = "left";
  protected displayName = "";
  protected title = "Semáforo";
  protected targets = "30, 70, 20, 60";
  protected duration = 60;
  protected repetitions = 6;
  protected timeLimit = 6;
  protected hold = 0.7;
  protected tolerance = 12;
  protected points = 10;
  protected sets = 3;
  protected rest = 30;
  protected readonly games = [
    { label: "Semáforo · dois braços", value: "shoulder" },
    { label: "Surfe · inclinação do tronco", value: "surfing" },
    { label: "Elevação de ombros convencional", value: "shoulderElevation" },
  ];
  protected readonly sides = [
    { label: "Esquerdo", value: "left" },
    { label: "Direito", value: "right" },
  ];
  constructor() {
    effect(() => {
      this.store.currentUid();
      this.displayName = "";
      this.title = "Semáforo";
      this.game = "shoulder";
      this.side = "left";
      this.targets = "30, 70, 20, 60";
      this.duration = 60;
      this.repetitions = 6;
      this.timeLimit = 6;
      this.hold = 0.7;
      this.tolerance = 12;
      this.points = 10;
      this.sets = 3;
      this.rest = 30;
      this.changeDetector.markForCheck();
    });
  }
  protected gameChanged(game: Game): void {
    this.game = game;
    this.title = game === "shoulderElevation" ? "Elevação de ombros convencional" : game === "surfing" ? "Surfe" : "Semáforo";
  }
  protected save(): void {
    const uid = this.store.currentUid();
    if (!uid || this.store.loadedUid() !== uid) return;
    this.store.message.set("");
    try {
      if (this.store.storageError())
        throw Error(
          "Os dados locais precisam ser recuperados antes de salvar.",
        );
      if (!this.displayName.trim() || !this.title.trim())
        throw Error("Preencha nome e título.");
      const numbers = [
        this.duration,
        this.repetitions,
        this.timeLimit,
        this.hold,
        this.tolerance,
        this.points,
      ];
      if (
        !numbers.every(Number.isFinite) ||
        this.duration < 1 ||
        this.duration > 3600 ||
        !Number.isInteger(this.repetitions) ||
        this.repetitions < 1 ||
        this.repetitions > 1000 ||
        this.timeLimit <= 0 ||
        this.timeLimit > 3600 ||
        this.hold < 0 ||
        (this.game !== 'shoulderElevation' && this.hold > this.timeLimit) ||
        this.tolerance < 1 ||
        this.tolerance > 50 ||
        !Number.isInteger(this.points) ||
        this.points < 0 ||
        this.points > 1000
      )
        throw Error("Confira os limites e a permanência no alvo.");
      const config: Plan["config"] = {
        repetitions: this.repetitions,
        holdMs: (this.game === "shoulderElevation" ? this.timeLimit : this.hold) * 1000,
        timeLimitMs: this.timeLimit * 1000,
        tolerance: this.tolerance / 100,
        pointsPerHit: this.points,
      };
      if (this.game !== "shoulderElevation") config.sessionDurationMs = this.duration * 1000;
      if (this.game === "shoulderElevation") {
        if (!Number.isInteger(this.sets) || this.sets < 1 || this.sets > 100 || !Number.isFinite(this.rest) || this.rest < 0 || this.rest > 3600)
          throw Error("Confira o número de séries e o tempo de descanso.");
        config.sets = this.sets;
        config.restMs = this.rest * 1000;
      }
      if (this.game === "surfing") {
        const entries = this.targets.split(",").map((entry) => entry.trim());
        if (entries.length > 1000) throw Error("Informe até 1000 alvos.");
        config.targets = entries.map((entry) => {
          if (!/^\d+(?:\.\d+)?$/.test(entry) || Number(entry) > 100)
            throw Error("Informe alvos numéricos entre 0 e 100.");
          return Number(entry) / 100;
        });
        config.side = this.side;
      }
      const plan: Plan = {
        id: crypto.randomUUID(),
        version: 1,
        patientId: "jogador-demo",
        displayName: this.displayName.trim(),
        title: this.title.trim(),
        gameId: this.game,
        config,
      };
      this.store.save(plan);
    } catch (e) {
      this.store.message.set(
        e instanceof Error ? e.message : "Não foi possível salvar.",
      );
    }
  }
}
