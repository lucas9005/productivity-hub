import { HttpContextToken, HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { environment } from '@environments/environment';
import { NotificationService } from '@shared/services/notification/notification.service';
import { SKIP_ERROR } from '@shared/tokens/skip-error.token';
import { catchError, throwError } from 'rxjs';

/**
 * Global HTTP error interceptor.
 *
 * Skips handling for requests marked with the `SKIP_ERROR` context token.
 * Intercepts all HTTP errors and maps known status codes to user-friendly messages.
 * Notifies users using the `NotificationService`.
 *
 * @param req - The outgoing HTTP request.
 * @param next - The handler for forwarding the request.
 * @returns A stream that either continues the request or throws an error with a notification.
 */
export const errorInterceptor: HttpInterceptorFn = (req, next) => {
	const skipGlobalErrorHandling: boolean = req.context.get(SKIP_ERROR as HttpContextToken<boolean>);
	if (skipGlobalErrorHandling) {
		return next(req);
	}

	return next(req).pipe(
		catchError((error: HttpErrorResponse) => {
			if (!environment.production) {
				console.error('HTTP error intercepted:', error);
			}

			if (environment.production && environment.enableExternalLogging && error.status >= 500) {
				logHttpError(error.status, error);
			}

			let message: string;
			switch (error.status) {
				case 0:
					message = 'Network error: Please check your connection.';
					break;

				case 400:
					message = extractErrorMessage(error) ?? 'Invalid request.';
					break;

				case 401:
					// TODO [Auth]: Trigger logout and redirect after authentication is implemented
					message = 'Unauthorized: Please log in.';
					break;

				case 403:
					message = 'Access denied.';
					break;

				case 404:
					message = 'Resource not found.';
					break;

				default:
					if (error.status >= 500 && error.status <= 599) {
						message = 'Server error: Please try again later.';
					} else {
						message = 'An unknown error occurred. Please try again.';
					}
					break;
			}

			// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
			const _notificationService: NotificationService = inject(NotificationService);
			_notificationService.notify('error', message);

			return throwError(() => error);
		})
	);
};

/**
 * Extracts a human-readable error message from an `HttpErrorResponse`.
 *
 * Supports different backend error formats including:
 * - An array of string messages
 * - A single string message
 * - A raw string as the `error` payload
 *
 * Returns `null` if no suitable message format is found.
 *
 * @param error - The HTTP error response returned from the backend.
 * @returns A formatted string message or `null` if none could be extracted.
 */
function extractErrorMessage(error: HttpErrorResponse): string | null {
	const backendError = error.error;

	if (!backendError) {
		return null;
	}

	// Handle array of messages
	if (Array.isArray(backendError.message)) {
		return backendError.message.join(', ');
	}

	// Handle single string message
	if (typeof backendError.message === 'string') {
		return backendError.message;
	}

	// Handle plain string message
	if (typeof backendError === 'string') {
		return backendError;
	}

	return null;
}

/**
 * Send HTTP errors to external logging service
 *
 * @param status - The HTTP status code of the error.
 * @param error - The HTTP error response returned from the backend.
 */
function logHttpError(status: number, error: HttpErrorResponse): void {
	// TODO [Logging]: Move this to centralized LoggerService once implemented
	// eslint-disable-next-line no-console
	console.debug(`[HttpErrorLog] ${status}:`, error);
}
