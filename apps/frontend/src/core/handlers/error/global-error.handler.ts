import type { ErrorHandler } from '@angular/core';
import { Injectable, inject } from '@angular/core';
import { environment } from '@environments/environment';
import { NotificationService } from '@shared/services/notification/notification.service';

/**
 * Global Angular error handler.
 *
 * Handles all angular errors and logs them depending on environment configuration.
 * Notifies users using the `NotificationService`.
 */
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
	/**
	 * Injected notification service for notification management.
	 */
	// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
	private readonly _notificationService: NotificationService = inject(NotificationService);

	/**
	 * Handle the uncaught angular runtime errors.
	 *
	 * @param error - The Angular error that occurred in the frontend.
	 */
	public handleError(error: unknown): void {
		if (!environment.production) {
			console.error('[GlobalErrorHandler] ERROR:', error);
		}

		if (environment.production && environment.enableExternalLogging) {
			this.logError(error);
		}

		this._notificationService.notify('error', 'An unknown error occurred. Please try again.');
	}

	/**
	 * Log errors to external logging service.
	 *
	 * @param error - The Angular error that occurred in the frontend.
	 */
	private logError(error: unknown): void {
		// TODO [Logging]: Move this to centralized LoggerService once implemented
		// including contextual info (user, app version, route, timestamp, etc)
		// eslint-disable-next-line no-console
		console.debug('[GlobalErrorHandler] ERROR:', error);
	}
}
