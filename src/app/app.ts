import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  effect,
  inject,
  signal,
} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Button } from "@openng/optimus-ui/button";
import { InputText } from "@openng/optimus-ui/inputtext";
import { Select } from "@openng/optimus-ui/select";
import { AuthState } from "./auth-state";

type Game = "shoulder" | "surfing";
type Side = "left" | "right";
type Level = number | { left: number; right: number };
interface Plan {
  id: string;
  version: number;
  patientId: string;
  displayName: string;
  title: string;
  gameId: Game;
  config: {
    targets: Level[];
    repetitions: number;
    holdMs: number;
    timeLimitMs: number;
    tolerance: number;
    sessionDurationMs: number;
    pointsPerHit: number;
    side?: Side;
  };
}
const key = "homephysio.professional.demo.v1";
@Component({
  selector: "app-root",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [FormsModule, Button, InputText, Select],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  protected readonly authState = inject(AuthState);
  protected readonly loadedUid = signal<string | null>(null);
  protected readonly plans = signal<Plan[]>([]);
  protected readonly message = signal("");
  protected readonly storageError = signal(false);
  protected game: Game = "shoulder";
  protected side: Side = "left";
  protected displayName = "";
  protected title = "Semáforo";
  protected targets = "50/50, 80/50, 50/80";
  protected duration = 60;
  protected repetitions = 6;
  protected timeLimit = 6;
  protected hold = 0.7;
  protected tolerance = 12;
  protected points = 10;
  protected readonly games = [
    { label: "Semáforo · dois braços", value: "shoulder" },
    { label: "Surfe · inclinação do tronco", value: "surfing" },
  ];
  protected readonly sides = [
    { label: "Esquerdo", value: "left" },
    { label: "Direito", value: "right" },
  ];
  constructor() {
    effect(() => {
      const uid = this.authState.uid();
      this.plans.set([]);
      this.message.set("");
      this.storageError.set(false);
      this.loadedUid.set(null);
      this.displayName = "";
      this.title = "Semáforo";
      this.game = "shoulder";
      this.side = "left";
      this.targets = "50/50, 80/50, 50/80";
      this.duration = 60;
      this.repetitions = 6;
      this.timeLimit = 6;
      this.hold = 0.7;
      this.tolerance = 12;
      this.points = 10;
      if (!uid) return;
      try {
        const data: unknown = JSON.parse(
          localStorage.getItem(`${key}:${uid}`) ?? "[]",
        );
        if (!Array.isArray(data) || !data.every(this.validSavedPlan))
          throw Error("Dados inválidos");
        this.plans.set(data);
      } catch {
        this.storageError.set(true);
        this.message.set(
          "Não foi possível ler os dados locais. Eles foram preservados.",
        );
      }
      this.loadedUid.set(uid);
    });
  }
  private validSavedPlan(value: unknown): value is Plan {
    if (!value || typeof value !== "object") return false;
    const p = value as Partial<Plan>;
    return (
      typeof p.id === "string" &&
      typeof p.title === "string" &&
      typeof p.displayName === "string" &&
      (p.gameId === "shoulder" || p.gameId === "surfing") &&
      !!p.config &&
      Array.isArray(p.config.targets)
    );
  }
  protected changeGame(value: Game): void {
    this.game = value;
    this.targets =
      value === "surfing" ? "30, 70, 20, 60" : "50/50, 80/50, 50/80";
  }
  protected save(): void {
    const uid = this.authState.uid();
    if (!uid || this.loadedUid() !== uid) return;
    this.message.set("");
    try {
      if (this.storageError())
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
        this.hold > this.timeLimit ||
        this.tolerance < 1 ||
        this.tolerance > 50 ||
        !Number.isInteger(this.points) ||
        this.points < 0 ||
        this.points > 1000
      )
        throw Error("Confira os limites e a permanência no alvo.");
      const entries = this.targets.split(",").map((s) => s.trim());
      if (!entries.length || entries.length > 1000)
        throw Error("Informe de 1 a 1000 alvos.");
      const level = (s: string) => {
        if (!/^\d+(?:\.\d+)?$/.test(s))
          throw Error("Informe alvos numéricos entre 0 e 100.");
        const n = Number(s);
        if (n > 100) throw Error("Cada alvo deve estar entre 0 e 100%.");
        return n / 100;
      };
      const values: Level[] =
        this.game === "shoulder"
          ? entries.map((entry) => {
              const pair = entry.split("/").map((s) => s.trim());
              if (pair.length !== 2)
                throw Error("Use pares como 50/80 para os braços.");
              return { left: level(pair[0]), right: level(pair[1]) };
            })
          : entries.map(level);
      const config: Plan["config"] = {
        targets: values,
        repetitions: this.repetitions,
        holdMs: this.hold * 1000,
        timeLimitMs: this.timeLimit * 1000,
        tolerance: this.tolerance / 100,
        sessionDurationMs: this.duration * 1000,
        pointsPerHit: this.points,
      };
      if (this.game === "surfing") config.side = this.side;
      const plan: Plan = {
        id: crypto.randomUUID(),
        version: 1,
        patientId: "jogador-demo",
        displayName: this.displayName.trim(),
        title: this.title.trim(),
        gameId: this.game,
        config,
      };
      const updated = [...this.plans(), plan];
      localStorage.setItem(`${key}:${uid}`, JSON.stringify(updated));
      this.plans.set(updated);
      this.message.set("Atividade salva somente neste navegador.");
    } catch (e) {
      this.message.set(
        e instanceof Error ? e.message : "Não foi possível salvar.",
      );
    }
  }
  protected download(plan: Plan): void {
    if (
      !this.authState.uid() ||
      this.loadedUid() !== this.authState.uid() ||
      !this.plans().includes(plan)
    )
      return;
    const url = URL.createObjectURL(
      new Blob([JSON.stringify(plan, null, 2)], { type: "application/json" }),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = `atividade-${plan.id}.json`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
}
