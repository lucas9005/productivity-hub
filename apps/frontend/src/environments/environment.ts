import type { AppEnvironment } from '@shared/models/environment.model';

/**
 * Template environment configuration.
 *
 * This file contains environment-specific flags used as base template.
 */
export const environment: AppEnvironment = {
	production: false,
	enableExternalLogging: false
} as const;
