import { Component, inject } from '@angular/core';
import { AuthState } from './auth-state';
import { RouterOutlet } from '@angular/router';
import { Message } from '@openng/optimus-ui/message';
import { Topbar } from './topbar';
import { PatientStore } from './patients/patient.store';
@Component({ selector: 'app-root', imports: [RouterOutlet, Message, Topbar], templateUrl: './app.html' })
export class App { protected readonly authState = inject(AuthState); protected readonly store = inject(PatientStore); }
