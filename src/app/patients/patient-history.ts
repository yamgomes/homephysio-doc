import { Component, effect, inject, input, signal } from "@angular/core";
import type { SessionReport } from "@homephysio/contracts";
import { GAME_DEFINITIONS, reportLines } from "@homephysio/contracts";
import { Button } from "@openng/optimus-ui/button";
import { DataView } from "@openng/optimus-ui/dataview";
import { Message } from "@openng/optimus-ui/message";
import { Panel } from "@openng/optimus-ui/panel";
import { PatientApi } from "./patient-api";

@Component({
  selector: "app-patient-history",
  imports: [Button, DataView, Message, Panel],
  templateUrl: "./patient-history.html",
})
export class PatientHistory {
  readonly patientId = input.required<string>();
  private readonly api = inject(PatientApi);
  private readonly reload = signal(0);
  protected readonly reports = signal<(SessionReport & { id: string })[]>([]);
  protected readonly loading = signal(true);
  protected readonly error = signal(false);
  protected readonly date = new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
  });
  protected readonly reportLines = reportLines;
  protected gameLabel(session: SessionReport) {
    return GAME_DEFINITIONS[session.gameId]?.label ?? session.title;
  }

  constructor() {
    effect((onCleanup) => {
      const id = this.patientId();
      this.reload();
      this.reports.set([]);
      this.error.set(false);
      this.loading.set(true);
      let current = true;
      onCleanup(() => {
        current = false;
      });

      void this.api
        .listResults(id)
        .then((results) => {
          if (current) this.reports.set(results);
        })
        .catch(() => {
          if (current) this.error.set(true);
        })
        .finally(() => {
          if (current) this.loading.set(false);
        });
    });
  }

  protected refresh() {
    this.reload.update((value) => value + 1);
  }
  protected seconds(milliseconds: number) {
    return Math.round(milliseconds / 1000);
  }
  protected status(reason: SessionReport["endReason"]) {
    return {
      completed: "Concluída",
      stopped: "Interrompida",
      error: "Encerrada por erro",
    }[reason];
  }
}
