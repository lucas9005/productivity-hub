import { Environment } from './environment.interface';

/**
 * @description Production environment configuration
 * This configuration is used when running the application in production mode.
 *
 * @remarks
 * - API endpoints are configured for production servers
 * - Debug features are disabled
 * - Experimental features are disabled for stability
 * - Used when building with `ng build --configuration production`
 *
 * @example
 * ```typescript
 * import { environment } from './environment';
 *
 * if (environment.production) {
 *   console.log('Production mode active');
 * }
 * ```
 */
export const environment: Environment = {
  /**
   * @description Production mode flag
   * Set to true for production environment
   */
  production: true,

  /**
   * @description API base URL for production
   * Points to production API server
   */
  apiUrl: 'https://api.example.com/v1',

  /**
   * @description Application version
   * Matches the released version number
   */
  version: '1.0.0',

  /**
   * @description Feature flags for production
   * Experimental features are disabled by default
   */
  features: {
    enableExperimental: false,
  },
} as const;
