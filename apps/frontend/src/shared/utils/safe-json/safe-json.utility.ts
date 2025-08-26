import { environment } from '@environments/environment';
import type { OperationError, ParseOptions, ParseResult, SafeJsonConfig, StringifyOptions, StringifyResult } from '@shared/models/safe-json.model';

/**
 * Handle operation errors.
 *
 * @param caller - Name of the calling function.
 * @param config - Configuration for error handling and notifications.
 * @param error - The error to log.
 */
function handleOperationError(caller: string, config: SafeJsonConfig, error: unknown): OperationError {
	if (!environment.production) {
		console.error(`[${caller}] ${config.context}:`, error);
	}

	if (environment.production && environment.enableExternalLogging) {
		logError(caller, config.context as string, error);
	}

	if (config.notify && config.notifyFn) {
		config.notifyFn('error', 'An unknown error occurred. Please try again.');
	}

	return { ok: false, error: error instanceof Error ? error : new Error(String(error)) };
}

/**
 * Log errors to external logging service.
 *
 * @param caller - Name of the calling function.
 * @param context - The context of the error.
 * @param error - The error to log.
 */
function logError(caller: string, context: string, error: unknown): void {
	// TODO [Logging]: Move this to centralized LoggerService once implemented
	// including contextual info (user, app version, route, timestamp, etc)
	// eslint-disable-next-line no-console
	console.debug(`[${caller}] ${context}:`, error);
}

/**
 * Safely converts a value to a JSON string.
 *
 * Wraps `JSON.stringify` with error handling and environment-aware logging.
 * Always logs to the console in development, and optionally logs to an external service in production.
 * Optionally notifies the user via `notifyFn` if enabled in `StringifyConfig`.
 *
 * @param input - The value to stringify.
 * @param config - Configuration for error handling and notifications.
 * @param options - Optional JSON.stringify configuration.
 * @returns A result object indicating success or failure.
 */
export function safeJsonStringify(input: unknown, config: SafeJsonConfig, options?: StringifyOptions): StringifyResult {
	try {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-argument
		const value = JSON.stringify(input, options?.replacer as any, options?.space as any);

		return { ok: true, value };
	} catch (error: unknown) {
		return handleOperationError('safeJsonStringify', config, error);
	}
}

/**
 * Safely parses a JSON string into a typed value.
 *
 * Wraps `JSON.parse` with error handling, environment-aware logging, and optional validation.
 * Always logs to the console in development, and optionally logs to an external service in production.
 * Optionally validates the parsed result via `validationFn`. Throws a validation error if the function returns false.
 * Optionally notifies the user via `notifyFn` if enabled in `StringifyConfig`.
 *
 * @param input - The JSON string to parse.
 * @param config - Configuration for error handling and notifications.
 * @param options - Optional parsing configuration and validation.
 * @returns A result object indicating success or failure.
 */
export function safeJsonParse<T>(input: string, config: SafeJsonConfig, options?: ParseOptions<T>): ParseResult<T> {
	try {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-argument
		const value: T = JSON.parse(input, options?.reviverFn as any);

		if (options?.validationFn && !options.validationFn(value)) {
			const error = new Error('Validation failed');
			error.name = 'ValidationError';
			throw error;
		}

		return { ok: true, value };
	} catch (error: unknown) {
		return handleOperationError('safeJsonParse', config, error);
	}
}
