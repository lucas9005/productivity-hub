/**
 * Represents a handle error configuration.
 */
export interface HandleErrorConfig<T> {
	/**
	 * Describes where the error occurred.
	 */
	context: string;

	/**
	 * Enables user notification.
	 */
	notify?: boolean;

	/**
	 * Specify custom fallback.
	 */
	fallback?: T;
}
