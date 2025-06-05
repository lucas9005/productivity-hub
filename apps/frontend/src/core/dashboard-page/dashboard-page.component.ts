import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Guarded dashboard page component.
 *
 * Serves as the entry screen of the application after login at the route (`'/dashboard'`).
 * Displays the features widgets and visually highlights important information.
 *
 * @example
 * <app-dashboard-page></app-dashboard-page>
 */
@Component({
	selector: 'app-dashboard-page',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [],
	templateUrl: './dashboard-page.component.html',
	styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent {}
