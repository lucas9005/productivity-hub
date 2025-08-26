import { environment } from '@environments/environment';
import type { ClearResult, GetItemOptions, GetItemResult, OperationError, RemoveItemResult, SafeStorage, SafeStorageConfig, SetItemOptions, SetItemResult } from '@shared/models/safe-storage.model';
import { safeJsonParse, safeJsonStringify } from '@shared/utils/safe-json/safe-json.utility';

/**
 * Factory to create a SafeStorage instance.
 *
 * Wraps the native Web Storage API (`localStorage` or `sessionStorage`)
 * with type safety, JSON handling, error handling, and environment-aware logging.
 * Optionally notifies the user via `notifyFn` if enabled in `SafeStorageConfig`.
 *
 * @param storage - The underlying Storage object (`localStorage` or `sessionStorage`), or `undefined` if not available.
 * @returns A SafeStorage implementation that exposes setItem, getItem, removeItem, and clear methods.
 */
function createSafeStorage(storage: Storage | undefined): SafeStorage {
	return {
		/**
		 * Set an item by key.
		 */
		setItem<T = unknown>(key: string, value: T | string, config: SafeStorageConfig, options?: SetItemOptions): SetItemResult {
			try {
				if (!storage) {
					const error = new Error('Storage is unavailable');
					error.name = 'StorageUnavailable';
					throw error;
				}

				let toStore: string;

				if (options?.json === true) {
					const stringifyResult = safeJsonStringify(value, { context: 'safeStorage:setItem' }, options?.stringifyOptions);

					if (!stringifyResult.ok) {
						throw stringifyResult.error;
					}

					toStore = stringifyResult.value;
				} else {
					if (typeof value !== 'string') {
						const error = new Error('Non-string value requires options.json = true');
						error.name = 'InvalidValueType';
						throw error;
					}

					toStore = value;
				}

				storage.setItem(key, toStore);

				return { ok: true };
			} catch (error: unknown) {
				return handleOperationError('safeStorage:setItem', config, error);
			}
		},

		/**
		 * Get an item by key.
		 */
		getItem<T = string>(key: string, config: SafeStorageConfig, options?: GetItemOptions<T>): GetItemResult<T> {
			try {
				if (!storage) {
					const error = new Error('Storage is unavailable');
					error.name = 'StorageUnavailable';
					throw error;
				}

				const stored = storage.getItem(key);
				let value: T | null;

				if (stored === null) {
					value = null;
				} else if (options?.json === true) {
					const parseResult = safeJsonParse<T>(stored, { context: 'safeStorage:getItem' }, options?.parseOptions);

					if (!parseResult.ok) {
						throw parseResult.error;
					}

					value = parseResult.value;
				} else {
					value = stored as T;
				}

				return { ok: true, value };
			} catch (error: unknown) {
				return handleOperationError('safeStorage:getItem', config, error);
			}
		},

		/**
		 * Remove an item by key.
		 */
		removeItem(key: string, config: SafeStorageConfig): RemoveItemResult {
			try {
				if (!storage) {
					const error = new Error('Storage is unavailable');
					error.name = 'StorageUnavailable';
					throw error;
				}

				storage.removeItem(key);

				return { ok: true };
			} catch (error: unknown) {
				return handleOperationError('safeStorage:removeItem', config, error);
			}
		},

		/**
		 * Clear the entire storage.
		 */
		clear(config: SafeStorageConfig): ClearResult {
			try {
				if (!storage) {
					const error = new Error('Storage is unavailable');
					error.name = 'StorageUnavailable';
					throw error;
				}

				storage.clear();

				return { ok: true };
			} catch (error: unknown) {
				return handleOperationError('safeStorage:clear', config, error);
			}
		}
	};
}

/**
 * Handle operation errors.
 *
 * @param caller - Name of the calling function.
 * @param config - Configuration for error handling and notifications.
 * @param error - The error to log.
 */
function handleOperationError(caller: string, config: SafeStorageConfig, error: unknown): OperationError {
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
 * Safe wrapper around the browser's `localStorage`.
 *
 * Provides typed access, JSON handling, and consistent error handling
 * via the SafeStorage API. If `localStorage` is unavailable (e.g., SSR),
 * operations will fail gracefully.
 */
export const safeLocalStorage: SafeStorage = createSafeStorage(typeof globalThis.localStorage !== 'undefined' ? globalThis.localStorage : undefined);

/**
 * Safe wrapper around the browser's `sessionStorage`.
 *
 * Provides typed access, JSON handling, and consistent error handling
 * via the SafeStorage API. If `sessionStorage` is unavailable (e.g., SSR),
 * operations will fail gracefully.
 */
export const safeSessionStorage: SafeStorage = createSafeStorage(typeof globalThis.sessionStorage !== 'undefined' ? globalThis.sessionStorage : undefined);
