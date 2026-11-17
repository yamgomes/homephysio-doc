import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Button, ButtonDirective } from '@openng/optimus-ui/button';
import { DataView } from '@openng/optimus-ui/dataview';
import { PatientStore } from './patient.store';
import { PatientCreateDialog } from './patient-create-dialog';

@Component({ selector: 'app-patients', imports: [Button, ButtonDirective, DataView, RouterLink, PatientCreateDialog], templateUrl: './patients.html' })
export class Patients {
  protected readonly store = inject(PatientStore);
  private readonly router = inject(Router);
  protected readonly adding = signal(false);
  protected openPatient(id: string) {
    return this.router.navigate(['/pacientes', id]);
  }
}
