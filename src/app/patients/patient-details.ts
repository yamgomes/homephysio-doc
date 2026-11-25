import { Component, effect, inject, signal, untracked } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { ButtonDirective } from "@openng/optimus-ui/button";
import { Dialog } from "@openng/optimus-ui/dialog";
import { Message } from "@openng/optimus-ui/message";
import { Panel } from "@openng/optimus-ui/panel";
import { PatientAccessCard } from "./patient-access-card";
import { PatientHistory } from "./patient-history";
import { PatientStore } from "./patient.store";
import { TherapyForm } from "./therapy-form";

@Component({
  imports: [
    RouterLink,
    ButtonDirective,
    Dialog,
    Message,
    Panel,
    TherapyForm,
    PatientAccessCard,
    PatientHistory,
  ],
  templateUrl: "./patient-details.html",
})
export class PatientDetails {
  protected readonly store = inject(PatientStore);
  protected readonly editingPlan = signal(false);
  private readonly params = toSignal(inject(ActivatedRoute).paramMap);

  constructor() {
    effect(() => {
      const id = this.params()?.get("id");
      this.editingPlan.set(false);
      if (id) untracked(() => void this.store.select(id));
    });
  }
}
