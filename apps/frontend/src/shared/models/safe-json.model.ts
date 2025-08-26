import type { NotificationType } from './notification.model';

/**
 * Represents a successful stringify operation.
 */
type StringifySuccess = {
	readonly ok: true;
	readonly value: string;
};

/**
 * Represents a successful parse operation.
 */
type ParseSuccess<T> = {
	readonly ok: true;
	readonly value: T;
};

/**
 * Represents a failed operation.
 */
export type OperationError = {
	readonly ok: false;
	readonly error: Error;
};

/**
 * Configuration for safe JSON utilities.
 */
export interface SafeJsonConfig {
	context: string;
	notify?: boolean;
	notifyFn?: (type: NotificationType, message: string) => void;
}

/**
 * Options for safeJsonStringify.
 */
export interface StringifyOptions {
	replacer?: ((this: unknown, key: string, value: unknown) => unknown) | ReadonlyArray<number | string>;
	space?: string | number;
}

/**
 * Options for safeJsonParse.
 */
export interface ParseOptions<T> {
	reviverFn?: (this: unknown, key: string, value: unknown) => unknown;
	validationFn?: (value: unknown) => value is T;
}

/**
 * Result type for safeJsonStringify.
 */
export type StringifyResult = StringifySuccess | OperationError;

/**
 * Result type for safeJsonParse.
 */
export type ParseResult<T> = ParseSuccess<T> | OperationError;
