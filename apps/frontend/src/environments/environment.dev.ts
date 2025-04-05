import { Environment } from './environment.interface';

/**
 * @description Development environment configuration
 * This configuration is used when running the application in development mode.
 *
 * @remarks
 * - API endpoints are configured for local development
 * - Debug features are enabled
 * - Experimental features are enabled for testing
 *
 * @example
 * ```typescript
 * import { environment } from './environment';
 *
 * if (!environment.production) {
 *   console.log('Development mode:', environment);
 * }
 * ```
 */
export const environment: Environment = {
  /**
   * @description Production mode flag
   * Set to false for development environment
   */
  production: false,

  /**
   * @description API base URL for development
   * Points to local development server
   */
  apiUrl: 'http://localhost:3000/api',

  /**
   * @description Application version
   * Updated with each development iteration
   */
  version: '1.0.0-dev',

  /**
   * @description Feature flags for development
   * Experimental features are enabled by default
   */
  features: {
    enableExperimental: true,
  },
} as const;
