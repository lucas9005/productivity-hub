import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { NavItem } from '@shared/models/nav-item.model';

/**
 * Global layout component.
 *
 * Serves as the global layout component for all authenticated pages.
 * Manages the header, sidenav, and footer components to provide a consistent layout for all pages.
 *
 * @example
 * <app-layout></app-layout>
 */
@Component({
	selector: 'app-layout',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [MatIconModule, MatListModule, MatMenuModule, MatSidenavModule, MatToolbarModule, RouterLink, RouterLinkActive, RouterOutlet, FooterComponent],
	templateUrl: './layout.component.html',
	styleUrl: './layout.component.scss'
})
export class LayoutComponent {
	/**
	 * List of navigation items displayed in the UI.
	 */
	public readonly routeList: readonly NavItem[] = [
		{
			routerLink: '/dashboard',
			icon: 'dashboard',
			label: 'Dashboard',
			className: 'dashboard'
		},
		{
			routerLink: '/task',
			icon: 'task',
			label: 'Task Manager',
			className: 'task'
		},
		{
			routerLink: '/finance',
			icon: 'attach_money',
			label: 'Finance Tracker',
			className: 'finance'
		},
		{
			routerLink: '/recipe',
			icon: 'restaurant',
			label: 'Recipe Book',
			className: 'recipe'
		},
		{
			routerLink: '/travel',
			icon: 'flight',
			label: 'Travel Planner',
			className: 'travel'
		},
		{
			routerLink: '/chat',
			icon: 'chat',
			label: 'Real-time Chat',
			className: 'chat'
		}
	];
}
