import { Component, inject, model, output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Button } from "@openng/optimus-ui/button";
import { Dialog } from "@openng/optimus-ui/dialog";
import { InputText } from "@openng/optimus-ui/inputtext";
import { PatientStore } from "./patient.store";

@Component({
  selector: "app-patient-create-dialog",
  imports: [FormsModule, Button, Dialog, InputText],
  templateUrl: "./patient-create-dialog.html",
})
export class PatientCreateDialog {
  readonly visible = model(false);
  readonly created = output<string>();
  protected readonly store = inject(PatientStore);
  protected name = "";

  protected async create() {
    if (!this.name.trim()) return;
    const patient = await this.store.create(this.name);
    if (patient) {
      this.visible.set(false);
      this.created.emit(patient.id);
    }
  }

  protected reset() {
    this.name = "";
  }
}
