import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

/**
 * Global Angular application configuration.
 *
 * Provides:
 * - Zone-less change detection with event coalescing for better performance.
 * - Angular animations support (required for Angular Material).
 * - Application-wide router configuration.
 */
export const appConfig: ApplicationConfig = {
	providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideAnimations(), provideRouter(routes)]
};
