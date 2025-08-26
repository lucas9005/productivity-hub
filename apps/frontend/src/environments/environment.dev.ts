import type { AppEnvironment } from '@shared/models/environment.model';

/**
 * Development environment configuration.
 *
 * This file contains environment-specific flags used during development builds.
 * It replaces `environment.ts` during the development build process.
 */
export const environment: AppEnvironment = {
	production: false,
	enableExternalLogging: false
} as const;
