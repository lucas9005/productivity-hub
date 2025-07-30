import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Guarded main dashboard page component.
 *
 * Serves as the entry screen of the application after login at the route (`'/dashboard'`).
 * Displays the features widgets and visually highlights important information.
 *
 * @example
 * <app-dashboard></app-dashboard>
 */
@Component({
	selector: 'app-dashboard',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [],
	templateUrl: './dashboard.component.html',
	styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {}
