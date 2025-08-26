import type { NotificationType } from './notification.model';
import type { ParseOptions, StringifyOptions } from './safe-json.model';

/**
 * Represents a successful setItem operation.
 */
type SetItemSuccess = {
	readonly ok: true;
};

/**
 * Represents a successful getItem operation.
 */
type GetItemSuccess<T> = {
	readonly ok: true;
	readonly value: T | null;
};

/**
 * Represents a successful removeItem operation.
 */
type RemoveItemSuccess = {
	readonly ok: true;
};

/**
 * Represents a successful clear operation.
 */
type ClearSuccess = {
	readonly ok: true;
};

/**
 * Represents a failed operation.
 */
export type OperationError = {
	readonly ok: false;
	readonly error: Error;
};

/**
 * API for safe storage.
 */
export interface SafeStorage {
	setItem<T = unknown>(key: string, value: T | string, config: SafeStorageConfig, options?: SetItemOptions): SetItemResult;
	getItem<T = string>(key: string, config: SafeStorageConfig, options?: GetItemOptions<T>): GetItemResult<T>;
	removeItem(key: string, config: SafeStorageConfig): RemoveItemResult;
	clear(config: SafeStorageConfig): ClearResult;
}

/**
 * Configuration for safe storage.
 */
export interface SafeStorageConfig {
	context: string;
	notify?: boolean;
	notifyFn?: (type: NotificationType, message: string) => void;
}

/**
 * Options for setItem.
 */
export interface SetItemOptions {
	json?: boolean;
	stringifyOptions?: StringifyOptions;
}

/**
 * Options for getItem.
 */
export interface GetItemOptions<T> {
	json?: boolean;
	parseOptions?: ParseOptions<T>;
}

/**
 * Result type for setItem.
 */
export type SetItemResult = SetItemSuccess | OperationError;

/**
 * Result type for getItem.
 */
export type GetItemResult<T> = GetItemSuccess<T> | OperationError;

/**
 * Result type for removeItem.
 */
export type RemoveItemResult = RemoveItemSuccess | OperationError;

/**
 * Result type for clear.
 */
export type ClearResult = ClearSuccess | OperationError;
