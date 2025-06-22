/**
 * Represents a app environment.
 */
export interface AppEnvironment {
	/**
	 * Enables production build.
	 */
	production: boolean;

	/**
	 * Enables external logging.
	 */
	enableExternalLogging: boolean;
}
