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

	// Fallback: redirects unknown routes to the root
	{
		path: '**',
		redirectTo: ''
	}
];
