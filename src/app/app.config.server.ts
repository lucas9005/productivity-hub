import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

/**
 * @description Server-side configuration for the application.
 * Extends the base app configuration with server-specific providers.
 *
 * @example
 * bootstrapApplication(AppComponent, serverConfig)
 */
const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering()],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
