import { Routes } from '@angular/router';

/**
 * Global Angular routing configuration.
 *
 * All routing is handled using `loadComponent` for optimized lazy loading.
 */
export const routes: Routes = [
	// Loads the Landing Page at the root path
	{
		path: '',
		loadComponent: () => import('@core/landing-page/landing-page.component').then((component) => component.LandingPageComponent),
		pathMatch: 'full'
	},

	// Loads all post-login pages through the LayoutComponent
	{
		path: '',
		loadComponent: () => import('@shared/components/layout/layout.component').then((component) => component.LayoutComponent),
		children: [
			// Loads the Dashboard Page at /dashboard
			{
				path: 'dashboard',
				loadComponent: () => import('@core/dashboard-page/dashboard-page.component').then((component) => component.DashboardPageComponent),
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
