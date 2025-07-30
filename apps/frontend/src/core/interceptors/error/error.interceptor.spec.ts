import { HttpContext, HttpContextToken, HttpErrorResponse, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { NotificationService } from '@shared/services/notification/notification.service';
import { SKIP_ERROR } from '@shared/tokens/skip-error.token';
import { throwError } from 'rxjs';

import { errorInterceptor } from './error.interceptor';

describe('errorInterceptor', () => {
	let mockNotify: jest.Mock;

	const interceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => TestBed.runInInjectionContext(() => errorInterceptor(req, next));

	beforeEach(() => {
		jest.spyOn(console, 'error').mockImplementation(() => {
			return;
		});
		jest.spyOn(console, 'debug').mockImplementation(() => {
			return;
		});
		mockNotify = jest.fn();
		TestBed.configureTestingModule({
			providers: [
				{
					provide: NotificationService,
					useValue: { notify: mockNotify }
				}
			]
		});
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('should not notify the user when SKIP_ERROR token is set to true', () => {
		// Define context, request and error
		const context = new HttpContext().set(SKIP_ERROR as HttpContextToken<boolean>, true);
		const request = new HttpRequest<unknown>('GET', '/test', { context });
		const error = new HttpErrorResponse({ status: 418 });

		// Mock the HTTP next handler to throw the defined error
		const next: HttpHandlerFn = () => throwError(() => error);

		// Trigger the interceptor
		interceptor(request, next).subscribe({
			error: (err: HttpErrorResponse) => {
				// Assert that the error is an instance of HttpErrorResponse
				expect(err).toBeInstanceOf(HttpErrorResponse);
				// Assert that console error was never triggered
				expect(console.error).not.toHaveBeenCalled();
				// Assert that notify was never triggered
				expect(mockNotify).not.toHaveBeenCalled();
			}
		});
	});

	it('should notify the user with the expected error message for status code 0', () => {
		// Define request and error
		const request = new HttpRequest<unknown>('GET', '/test');
		const errorMessage = 'Network error: Please check your connection.';
		const error = new HttpErrorResponse({ status: 0 });

		// Mock the HTTP next handler to throw the defined error
		const next: HttpHandlerFn = () => throwError(() => error);

		// Trigger the interceptor
		interceptor(request, next).subscribe({
			error: (err: HttpErrorResponse) => {
				// Assert that the error is an instance of HttpErrorResponse
				expect(err).toBeInstanceOf(HttpErrorResponse);
				// Assert that console error was triggered one time with the expected error
				expect(console.error).toHaveBeenCalledTimes(1);
				expect(console.error).toHaveBeenCalledWith(`[errorInterceptor] ${error.status}:`, error);
				// Assert that notify was triggered one time with the expected error message
				expect(mockNotify).toHaveBeenCalledTimes(1);
				expect(mockNotify).toHaveBeenCalledWith('error', errorMessage);
			}
		});
	});

	it('should notify the user with the expected error message for status code 400', () => {
		// Define request and error
		const request = new HttpRequest<unknown>('POST', '/test', { body: {} });
		const errorMessage = 'Invalid request data.';
		const error = new HttpErrorResponse({
			status: 400,
			error: { message: errorMessage }
		});

		// Mock the HTTP next handler to throw the defined error
		const next: HttpHandlerFn = () => throwError(() => error);

		// Trigger the interceptor
		interceptor(request, next).subscribe({
			error: (err: HttpErrorResponse) => {
				// Assert that the error is an instance of HttpErrorResponse
				expect(err).toBeInstanceOf(HttpErrorResponse);
				// Assert that console error was triggered one time with the expected error
				expect(console.error).toHaveBeenCalledTimes(1);
				expect(console.error).toHaveBeenCalledWith(`[errorInterceptor] ${error.status}:`, error);
				// Assert that notify was triggered one time with the expected error message
				expect(mockNotify).toHaveBeenCalledTimes(1);
				expect(mockNotify).toHaveBeenCalledWith('error', errorMessage);
			}
		});
	});

	it('should notify the user with the fallback error message for status code 400', () => {
		// Define request and error without message
		const request = new HttpRequest<unknown>('POST', '/test', { body: {} });
		const errorMessage = 'Invalid request.';
		const error = new HttpErrorResponse({
			status: 400,
			error: { message: null }
		});

		// Mock the HTTP next handler to throw the defined error
		const next: HttpHandlerFn = () => throwError(() => error);

		// Trigger the interceptor
		interceptor(request, next).subscribe({
			error: (err: HttpErrorResponse) => {
				// Assert that the error is an instance of HttpErrorResponse
				expect(err).toBeInstanceOf(HttpErrorResponse);
				// Assert that console error was triggered one time with the expected error
				expect(console.error).toHaveBeenCalledTimes(1);
				expect(console.error).toHaveBeenCalledWith(`[errorInterceptor] ${error.status}:`, error);
				// Assert that notify was triggered one time with the fallback error message
				expect(mockNotify).toHaveBeenCalledTimes(1);
				expect(mockNotify).toHaveBeenCalledWith('error', errorMessage);
			}
		});
	});

	it('should notify the user with the expected error message for status code 401', () => {
		// Define request and error
		const request = new HttpRequest<unknown>('GET', '/test');
		const errorMessage = 'Unauthorized: Please log in.';
		const error = new HttpErrorResponse({ status: 401 });

		// Mock the HTTP next handler to throw the defined error
		const next: HttpHandlerFn = () => throwError(() => error);

		// Trigger the interceptor
		interceptor(request, next).subscribe({
			error: (err: HttpErrorResponse) => {
				// Assert that the error is an instance of HttpErrorResponse
				expect(err).toBeInstanceOf(HttpErrorResponse);
				// Assert that console error was triggered one time with the expected error
				expect(console.error).toHaveBeenCalledTimes(1);
				expect(console.error).toHaveBeenCalledWith(`[errorInterceptor] ${error.status}:`, error);
				// Assert that notify was triggered one time with the expected error message
				expect(mockNotify).toHaveBeenCalledTimes(1);
				expect(mockNotify).toHaveBeenCalledWith('error', errorMessage);
			}
		});
	});

	it('should notify the user with the expected error message for status code 403', () => {
		// Define request and error
		const request = new HttpRequest<unknown>('GET', '/test');
		const errorMessage = 'Access denied.';
		const error = new HttpErrorResponse({ status: 403 });

		// Mock the HTTP next handler to throw the defined error
		const next: HttpHandlerFn = () => throwError(() => error);

		// Trigger the interceptor
		interceptor(request, next).subscribe({
			error: (err: HttpErrorResponse) => {
				// Assert that the error is an instance of HttpErrorResponse
				expect(err).toBeInstanceOf(HttpErrorResponse);
				// Assert that console error was triggered one time with the expected error
				expect(console.error).toHaveBeenCalledTimes(1);
				expect(console.error).toHaveBeenCalledWith(`[errorInterceptor] ${error.status}:`, error);
				// Assert that notify was triggered one time with the expected error message
				expect(mockNotify).toHaveBeenCalledTimes(1);
				expect(mockNotify).toHaveBeenCalledWith('error', errorMessage);
			}
		});
	});

	it('should notify the user with the expected error message for status code 404', () => {
		// Define request and error
		const request = new HttpRequest<unknown>('GET', '/test');
		const errorMessage = 'Resource not found.';
		const error = new HttpErrorResponse({ status: 404 });

		// Mock the HTTP next handler to throw the defined error
		const next: HttpHandlerFn = () => throwError(() => error);

		// Trigger the interceptor
		interceptor(request, next).subscribe({
			error: (err: HttpErrorResponse) => {
				// Assert that the error is an instance of HttpErrorResponse
				expect(err).toBeInstanceOf(HttpErrorResponse);
				// Assert that console error was triggered one time with the expected error
				expect(console.error).toHaveBeenCalledTimes(1);
				expect(console.error).toHaveBeenCalledWith(`[errorInterceptor] ${error.status}:`, error);
				// Assert that notify was triggered one time with the expected error message
				expect(mockNotify).toHaveBeenCalledTimes(1);
				expect(mockNotify).toHaveBeenCalledWith('error', errorMessage);
			}
		});
	});

	it('should notify the user with the expected error message for status code 500', () => {
		// Define request and error
		const request = new HttpRequest<unknown>('GET', '/test');
		const errorMessage = 'Server error: Please try again later.';
		const error = new HttpErrorResponse({ status: 500 });

		// Mock the HTTP next handler to throw the defined error
		const next: HttpHandlerFn = () => throwError(() => error);

		// Trigger the interceptor
		interceptor(request, next).subscribe({
			error: (err: HttpErrorResponse) => {
				// Assert that the error is an instance of HttpErrorResponse
				expect(err).toBeInstanceOf(HttpErrorResponse);
				// Assert that console error was triggered one time with the expected error
				expect(console.error).toHaveBeenCalledTimes(1);
				expect(console.error).toHaveBeenCalledWith(`[errorInterceptor] ${error.status}:`, error);
				// Assert that notify was triggered one time with the expected error message
				expect(mockNotify).toHaveBeenCalledTimes(1);
				expect(mockNotify).toHaveBeenCalledWith('error', errorMessage);
			}
		});
	});

	it('should notify the user with the fallback error message when an unknown error occurs', () => {
		// Define request and error
		const request = new HttpRequest<unknown>('GET', '/test');
		const errorMessage = 'An unknown error occurred. Please try again.';
		const error = new HttpErrorResponse({ status: 418 });

		// Mock the HTTP next handler to throw the defined error
		const next: HttpHandlerFn = () => throwError(() => error);

		// Trigger the interceptor
		interceptor(request, next).subscribe({
			error: (err: HttpErrorResponse) => {
				// Assert that the error is an instance of HttpErrorResponse
				expect(err).toBeInstanceOf(HttpErrorResponse);
				// Assert that console error was triggered one time with the expected error
				expect(console.error).toHaveBeenCalledTimes(1);
				expect(console.error).toHaveBeenCalledWith(`[errorInterceptor] ${error.status}:`, error);
				// Assert that notify was triggered one time with the expected error message
				expect(mockNotify).toHaveBeenCalledTimes(1);
				expect(mockNotify).toHaveBeenCalledWith('error', errorMessage);
			}
		});
	});

	it('should handle array of string messages', () => {
		// Define request and error
		const request = new HttpRequest<unknown>('POST', '/test', { body: {} });
		const errorMessage = 'Message A, Message B';
		const error = new HttpErrorResponse({
			status: 400,
			error: { message: ['Message A', 'Message B'] }
		});

		// Mock the HTTP next handler to throw the defined error
		const next: HttpHandlerFn = () => throwError(() => error);

		// Trigger the interceptor
		interceptor(request, next).subscribe({
			error: (err: HttpErrorResponse) => {
				// Assert that the error is an instance of HttpErrorResponse
				expect(err).toBeInstanceOf(HttpErrorResponse);
				// Assert that console error was triggered one time with the expected error
				expect(console.error).toHaveBeenCalledTimes(1);
				expect(console.error).toHaveBeenCalledWith(`[errorInterceptor] ${error.status}:`, error);
				// Assert that notify was triggered one time with the expected error message
				expect(mockNotify).toHaveBeenCalledTimes(1);
				expect(mockNotify).toHaveBeenCalledWith('error', errorMessage);
			}
		});
	});

	it('should handle plain string message', () => {
		// Define request and error
		const request = new HttpRequest<unknown>('POST', '/test', { body: {} });
		const errorMessage = 'Plain string message.';
		const error = new HttpErrorResponse({
			status: 400,
			error: errorMessage
		});

		// Mock the HTTP next handler to throw the defined error
		const next: HttpHandlerFn = () => throwError(() => error);

		// Trigger the interceptor
		interceptor(request, next).subscribe({
			error: (err: HttpErrorResponse) => {
				// Assert that the error is an instance of HttpErrorResponse
				expect(err).toBeInstanceOf(HttpErrorResponse);
				// Assert that console error was triggered one time with the expected error
				expect(console.error).toHaveBeenCalledTimes(1);
				expect(console.error).toHaveBeenCalledWith(`[errorInterceptor] ${error.status}:`, error);
				// Assert that notify was triggered one time with the expected error message
				expect(mockNotify).toHaveBeenCalledTimes(1);
				expect(mockNotify).toHaveBeenCalledWith('error', errorMessage);
			}
		});
	});

	it('should log the error message to external logger when the condition is true', () => {
		// Reset modules
		jest.resetModules();

		// Define mock environment
		jest.doMock('@environments/environment', () => ({
			environment: {
				production: true,
				enableExternalLogging: true
			}
		}));

		// Import interceptor
		const { errorInterceptor } = require('./error.interceptor');

		// Define request and error
		const request = new HttpRequest<unknown>('GET', '/test');
		const error = new HttpErrorResponse({ status: 500 });

		// Mock the HTTP next handler to throw the defined error
		const next: HttpHandlerFn = () => throwError(() => error);

		// Trigger the interceptor
		TestBed.runInInjectionContext(() => {
			errorInterceptor(request, next).subscribe({
				error: (err: HttpErrorResponse) => {
					// Assert that the error is an instance of HttpErrorResponse
					expect(err).toBeInstanceOf(HttpErrorResponse);
					// Assert that console debug was triggered one time with the expected error message
					expect(console.debug).toHaveBeenCalledTimes(1);
					expect(console.debug).toHaveBeenCalledWith('[errorInterceptor] 500:', error);
				}
			});
		});
	});

	it('should not log the error message to external logger when the condition is false', () => {
		// Reset modules
		jest.resetModules();

		// Define mock environment
		jest.doMock('@environments/environment', () => ({
			environment: {
				production: true,
				enableExternalLogging: false
			}
		}));

		// Import interceptor
		const { errorInterceptor } = require('./error.interceptor');

		// Define request and error
		const request = new HttpRequest<unknown>('GET', '/test');
		const error = new HttpErrorResponse({ status: 500 });

		// Mock the HTTP next handler to throw the defined error
		const next: HttpHandlerFn = () => throwError(() => error);

		// Trigger the interceptor
		TestBed.runInInjectionContext(() => {
			errorInterceptor(request, next).subscribe({
				error: (err: HttpErrorResponse) => {
					// Assert that the error is an instance of HttpErrorResponse
					expect(err).toBeInstanceOf(HttpErrorResponse);
					// Assert that console debug was never triggered
					expect(console.debug).not.toHaveBeenCalled();
				}
			});
		});
	});
});
