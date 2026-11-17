import { Component, effect, inject, untracked } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ButtonDirective } from '@openng/optimus-ui/button';
import { Message } from '@openng/optimus-ui/message';
import { PatientAccessCard } from './patient-access-card';
import { PatientStore } from './patient.store';
import { TherapyForm } from './therapy-form';
import { PatientHistory } from './patient-history';

@Component({
  imports: [RouterLink, ButtonDirective, Message, TherapyForm, PatientAccessCard, PatientHistory],
  templateUrl: './patient-details.html',
})
export class PatientDetails {
  protected readonly store = inject(PatientStore);
  private readonly params = toSignal(inject(ActivatedRoute).paramMap);

  constructor() {
    effect(() => {
      const id = this.params()?.get('id');
      if (id) untracked(() => void this.store.select(id));
    });
  }

}
