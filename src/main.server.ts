import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

/**
 * @description Bootstrap function for server-side rendering.
 * This function is used by the server to bootstrap the Angular application
 * with server-specific configuration.
 *
 * @returns A Promise that resolves when the application is bootstrapped
 *
 * @example
 * // In server.ts
 * const html = await commonEngine.render({
 *   bootstrap,
 *   // ... other options
 * });
 */
const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
