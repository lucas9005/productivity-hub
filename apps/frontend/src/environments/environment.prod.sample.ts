import type { AppEnvironment } from '@shared/models/environment.model';

/**
 * Production environment configuration sample.
 *
 * This file contains environment-specific flags with non-secret placeholders used during production builds in CI.
 * It replaces `environment.ts` during the production build process.
 */
export const environment: AppEnvironment = {
	production: true,
	enableExternalLogging: true
} as const;
