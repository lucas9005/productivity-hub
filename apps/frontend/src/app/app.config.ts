import type { HttpInterceptorFn } from '@angular/common/http';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import type { ApplicationConfig } from '@angular/core';
import { ErrorHandler, provideZoneChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { GlobalErrorHandler } from '@core/handlers/error/global-error.handler';
import { errorInterceptor } from '@core/interceptors/error/error.interceptor';

import { routes } from './app.routes';

/**
 * Global Angular application configuration.
 *
 * Provides:
 * - Zone-less change detection with event coalescing for better performance.
 * - Angular animations support (required for Angular Material).
 * - Application-wide router configuration.
 * - Global HTTP interceptor for centralized error handling.
 * - Global error handler for uncaught Angular runtime exceptions.
 */
export const appConfig: ApplicationConfig = {
	providers: [
		// Core framework behavior
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideAnimations(),

		// Application routing
		provideRouter(routes),

		// Global HTTP configuration
		provideHttpClient(withInterceptors([errorInterceptor as HttpInterceptorFn])),

		// Global error handler
		{
			provide: ErrorHandler,
			useClass: GlobalErrorHandler
		}
	]
};
