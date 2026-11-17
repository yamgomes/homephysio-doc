import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'pacientes',
    loadComponent: () => import('./patients/patients').then(module => module.Patients),
    title: 'Pacientes | Homephysio Doc',
  },
  {
    path: 'pacientes/:id',
    loadComponent: () => import('./patients/patient-details').then(module => module.PatientDetails),
    title: 'Paciente | Homephysio Doc',
  },
  { path: '', pathMatch: 'full', redirectTo: 'pacientes' },
  { path: '**', redirectTo: 'pacientes' },
];
