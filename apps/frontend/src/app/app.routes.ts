import { Routes } from '@angular/router';

/**
 * Global Angular routing configuration.
 *
 * All routing is handled using `loadComponent` for optimized lazy loading.
 */
export const routes: Routes = [
	// Loads the Main Landing Page at the root path
	{
		path: '',
		loadComponent: () => import('@core/pages/landing/landing.component').then((component) => component.LandingComponent),
		pathMatch: 'full'
	},

	// Loads all post-login pages through the LayoutComponent
	{
		path: '',
		loadComponent: () => import('@core/components/layout/layout.component').then((component) => component.LayoutComponent),
		children: [
			// Loads the Main Dashboard Page at /dashboard
			{
				path: 'dashboard',
				loadComponent: () => import('@core/pages/dashboard/dashboard.component').then((component) => component.DashboardComponent),
				pathMatch: 'full'
			}
		]
	},

	// Fallback: redirects unknown routes to the root
	{
		path: '**',
		redirectTo: ''
	}
];
