import { TestBed } from '@angular/core/testing';
import { NotificationService } from '@shared/services/notification/notification.service';

import { GlobalErrorHandler } from './global-error.handler';

describe('GlobalErrorHandler', () => {
	let globalErrorHandler: GlobalErrorHandler;
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
			providers: [GlobalErrorHandler, { provide: NotificationService, useValue: { notify: mockNotify } }]
		});
		globalErrorHandler = TestBed.inject(GlobalErrorHandler);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('should notify the user with the expected error', () => {
		// Define error
		const errorMessage = 'An unknown error occurred. Please try again.';
		const error = new Error('Test error');

		// Trigger the notification
		globalErrorHandler.handleError(error);

		// Assert that console error was triggered one time with the expected error
		expect(console.error).toHaveBeenCalledTimes(1);
		expect(console.error).toHaveBeenCalledWith('[GlobalErrorHandler] ERROR:', error);

		// Assert that notify was triggered one time with the expected error message
		expect(mockNotify).toHaveBeenCalledTimes(1);
		expect(mockNotify).toHaveBeenCalledWith('error', errorMessage);
	});
});
