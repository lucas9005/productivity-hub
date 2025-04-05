import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { routes } from './app.routes';
import { appFeature } from './store/app.store';

/**
 * @description Main application configuration object.
 * This configuration sets up the core functionality of the application including:
 * - Routing configuration
 * - Client-side hydration for SSR
 * - Browser animations
 * - NgRx store with the app feature
 *
 * @example
 * // In main.ts
 * bootstrapApplication(AppComponent, appConfig)
 */
export const appConfig: ApplicationConfig = {
  providers: [
    /** @description Configures the router with defined routes */
    provideRouter(routes),
    /** @description Enables client-side hydration for server-side rendering */
    provideClientHydration(),
    /** @description Enables Angular animations */
    provideAnimations(),
    /** @description Configures the NgRx store with the app feature */
    provideStore(appFeature.reducer),
  ],
};
