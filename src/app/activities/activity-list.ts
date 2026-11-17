import { Component, inject } from '@angular/core';
import { Button } from '@openng/optimus-ui/button';
import { ActivityStore } from './activity.store';
@Component({ selector: 'app-activity-list', imports: [Button], templateUrl: './activity-list.html' })
export class ActivityList { protected readonly store = inject(ActivityStore); }
