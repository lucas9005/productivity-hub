import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * Root application component.
 *
 * Acts as the main entry point of the application.
 * Hosts the global `<router-outlet />` for rendering routed
 * views from core and feature modules.
 *
 * @example
 * <app-root></app-root>
 */
@Component({
	selector: 'app-root',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterOutlet],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {}
