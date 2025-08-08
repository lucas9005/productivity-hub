import { inject } from '@angular/core';
import { environment } from '@environments/environment';
import { HandleErrorConfig } from '@shared/models/error.model';
import { NotificationService } from '@shared/services/notification/notification.service';
import { OperatorFunction, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

/**
 * RxJS error handler.
 *
 * Handles RxJS errors and logs them depending on environment configuration.
 * Notifies users using the `NotificationService` depending on `HandleErrorConfig`.
 * Returns a fallback value or rethrows the error depending on `HandleErrorConfig`.
 */
export function handleError<T>(config: HandleErrorConfig<T>): OperatorFunction<T, T> {
	/**
	 * Injected notification service for notification management.
	 */
	// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
	const _notificationService: NotificationService = inject(NotificationService);

	/**
	 * Handle the RxJS runtime errors.
	 *
	 * @param error - The RxJS error that ocurred in the frontend.
	 */
	return catchError((error) => {
		if (!environment.production) {
			console.error(`[handleError] ${config.context}:`, error);
		}

		if (environment.production && environment.enableExternalLogging) {
			logError(config.context as string, error);
		}

		if (config.notify) {
			_notificationService.notify('error', 'An unknown error occurred. Please try again.');
		}

		if (config.fallback !== undefined) {
			return of(config.fallback);
		}

		return throwError(() => error);
	});
}

/**
 * Log errors to external logging service
 *
 * @param context - The context of the error.
 * @param error - The RxJS error that ocurred in the frontend.
 */
function logError(context: string, error: unknown): void {
	// TODO [Logging]: Move this to centralized LoggerService once implemented
	// including contextual info (user, app version, route, timestamp, etc)
	// eslint-disable-next-line no-console
	console.debug(`[handleError] ${context}:`, error);
}
