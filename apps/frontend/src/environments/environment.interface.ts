/**
 * @description Interface for environment configuration used across deployment environments.
 *
 * @example
 * ```typescript
 * import { environment } from './environments/environment';
 *
 * if (environment.features.enableExperimental) {
 *   // Enable experimental features
 * }
 * ```
 */
export interface Environment {
  /** Production mode flag */
  production: boolean;

  /** API endpoint URL */
  apiUrl: string;

  /** Feature flags for environment-specific features */
  features: {
    /** Enable experimental features */
    enableExperimental: boolean;
  };
}
