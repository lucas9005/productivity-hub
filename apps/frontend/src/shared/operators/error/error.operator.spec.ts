import { TestBed } from '@angular/core/testing';
import type { HandleErrorConfig } from '@shared/models/error.model';
import { NotificationService } from '@shared/services/notification/notification.service';
import { throwError } from 'rxjs';

import { handleError } from './error.operator';

describe('handleError', () => {
	const DEFAULT_ERROR_MESSAGE = 'An unknown error occurred. Please try again.';

	let mockNotify: jest.Mock;

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

	it('should not notify the user when notify option is set to false', (done) => {
		// Define error and config
		const error = new Error('Test error');
		const config: HandleErrorConfig<string> = {
			context: 'Error context',
			notify: false
		};

		// Run the operator
		TestBed.runInInjectionContext(() => {
			throwError(() => error)
				.pipe(handleError(config))
				.subscribe({
					next: () => {
						// Test failure
						done.fail('The error was not handled as expected');
					},
					error: () => {
						// Assert that console error was triggered one time with the expected error
						expect(console.error).toHaveBeenCalledTimes(1);
						expect(console.error).toHaveBeenCalledWith(`[handleError] ${config.context}:`, error);
						// Assert that notify was never triggered
						expect(mockNotify).not.toHaveBeenCalled();
						// Test success
						done();
					}
				});
		});
	});

	it('should notify the user with the expected error message', (done) => {
		// Define error and config
		const error = new Error('Test error');
		const config: HandleErrorConfig<string> = {
			context: 'Error context',
			notify: true
		};

		// Run the operator
		TestBed.runInInjectionContext(() => {
			throwError(() => error)
				.pipe(handleError(config))
				.subscribe({
					next: () => {
						// Test failure
						done.fail('The error was not handled as expected');
					},
					error: () => {
						// Assert that console error was triggered one time with the expected error
						expect(console.error).toHaveBeenCalledTimes(1);
						expect(console.error).toHaveBeenCalledWith(`[handleError] ${config.context}:`, error);
						// Assert that notify was triggered one time with the expected error message
						expect(mockNotify).toHaveBeenCalledTimes(1);
						expect(mockNotify).toHaveBeenCalledWith('error', DEFAULT_ERROR_MESSAGE);
						// Test success
						done();
					}
				});
		});
	});

	it('should not return the error when the fallback value is provided', (done) => {
		// Define error and config
		const error = new Error('Test error');
		const config: HandleErrorConfig<string> = {
			context: 'Error context',
			notify: false,
			fallback: 'Fallback value'
		};

		// Run the operator
		TestBed.runInInjectionContext(() => {
			throwError(() => error)
				.pipe(handleError(config))
				.subscribe({
					next: (res: string) => {
						// Assert that console error was triggered one time with the expected error
						expect(console.error).toHaveBeenCalledTimes(1);
						expect(console.error).toHaveBeenCalledWith(`[handleError] ${config.context}:`, error);
						// Assert that response was returned with the expected fallback value
						expect(res).toBe(config.fallback);
						// Test success
						done();
					},
					error: () => {
						// Test failure
						done.fail('The error was not handled as expected');
					}
				});
		});
	});
});
