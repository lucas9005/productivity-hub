import { HttpInterceptorFn, provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { errorInterceptor } from '@shared/interceptors/error/error.interceptor';

import { routes } from './app.routes';

/**
 * Global Angular application configuration.
 *
 * Provides:
 * - Zone-less change detection with event coalescing for better performance.
 * - Angular animations support (required for Angular Material).
 * - Application-wide router configuration.
 * - Global HTTP interceptor for centralized error handling.
 */
export const appConfig: ApplicationConfig = {
	providers: [
		// Core framework behavior
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideAnimations(),

		// Application routing
		provideRouter(routes),

		// Global HTTP configuration
		provideHttpClient(withInterceptors([errorInterceptor as HttpInterceptorFn]))
	]
};
