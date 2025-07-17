import { TestBed } from '@angular/core/testing';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef } from '@angular/material/snack-bar';
import { NotificationComponent } from '@shared/components/notification/notification.component';
import { NotificationIcons, NotificationTypes, QueuedNotificationData } from '@shared/models/notification.model';
import { Subject, of } from 'rxjs';

import { NotificationService } from './notification.service';

describe('NotificationService', () => {
	let service: NotificationService;
	let mockMatSnackBar: jest.Mocked<MatSnackBar>;

	beforeEach(() => {
		const afterDismissed$ = of({ dismissedByAction: false });
		const mockSnackBarRef = { afterDismissed: () => afterDismissed$ } as unknown as MatSnackBarRef<NotificationComponent>;
		const openFromComponent = jest.fn().mockReturnValue(mockSnackBarRef);
		mockMatSnackBar = { openFromComponent } as unknown as jest.Mocked<MatSnackBar>;
		TestBed.configureTestingModule({
			providers: [NotificationService, { provide: MatSnackBar, useValue: mockMatSnackBar }]
		});
		service = TestBed.inject(NotificationService);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('should show a notification', () => {
		// Define input type, icon, and message
		const notificationType = NotificationTypes.success;
		const notificationIcon = NotificationIcons.success;
		const notificationMessage = 'Test success message.';

		// Trigger the notification
		service.notify(notificationType, notificationMessage);

		// Assert that the snackbar was triggered with the provided data and default configuration
		expect(mockMatSnackBar.openFromComponent).toHaveBeenCalledWith(
			NotificationComponent,
			expect.objectContaining({
				data: {
					type: notificationType,
					icon: notificationIcon,
					message: notificationMessage
				},
				duration: expect.any(Number),
				horizontalPosition: 'center',
				verticalPosition: 'bottom',
				panelClass: [`notification-${notificationType}`]
			})
		);
	});

	it('should not show a notification if the message is falsy after normalization', () => {
		// Define input type and invalid messages
		const notificationType = NotificationTypes.error;
		const invalidMessages = [undefined, null, '', '   '];

		// Trigger the notification for each invalid message
		for (const message of invalidMessages) {
			service.notify(notificationType, message as string);
		}

		// Assert that the snackbar was never triggered for any invalid message
		expect(mockMatSnackBar.openFromComponent).not.toHaveBeenCalled();
	});

	it('should not show a duplicate notification within the deduplication window', () => {
		// Define input type and message
		const notificationType = NotificationTypes.warning;
		const notificationMessage = 'Test warning message.';

		// Trigger duplicated notifications
		service.notify(notificationType, notificationMessage);
		service.notify(notificationType, notificationMessage);

		// Assert that the snackbar was triggered only one time
		expect(mockMatSnackBar.openFromComponent).toHaveBeenCalledTimes(1);
	});

	it('should show a duplicate notification after the deduplication window has passed', () => {
		// Define input type, message, config and now timestamp
		const notificationType = NotificationTypes.success;
		const notificationMessage = 'Test message.';
		const snackBarConfig = {
			duration: 1000
		} as MatSnackBarConfig;
		const now = Date.now();

		// Trigger the first duplicated notification
		service.notify(notificationType, notificationMessage, snackBarConfig);

		// Manually set the last timestamp to simulate deduplication window expiration
		Reflect.set(service, 'lastNotificationTimestamp', now - (snackBarConfig.duration! + 1));

		// Trigger the second duplicated notification
		service.notify(notificationType, notificationMessage);

		// Assert that the snackbar was triggered two times
		expect(mockMatSnackBar.openFromComponent).toHaveBeenCalledTimes(2);
	});

	it('should show a notification with custom MatSnackBarConfig values when provided', () => {
		// Define input type, icon, message and config
		const notificationType = NotificationTypes.info;
		const notificationIcon = NotificationIcons.info;
		const notificationMessage = 'Test info message.';
		const snackBarConfig = {
			duration: 1000,
			horizontalPosition: 'left',
			verticalPosition: 'top'
		} as MatSnackBarConfig;

		// Trigger the notification
		service.notify(notificationType, notificationMessage, snackBarConfig);

		// Assert that the snackbar was triggered with the provided data and configuration
		expect(mockMatSnackBar.openFromComponent).toHaveBeenCalledWith(
			NotificationComponent,
			expect.objectContaining({
				data: {
					type: notificationType,
					icon: notificationIcon,
					message: notificationMessage
				},
				duration: snackBarConfig.duration,
				horizontalPosition: snackBarConfig.horizontalPosition,
				verticalPosition: snackBarConfig.verticalPosition,
				panelClass: [`notification-${notificationType}`]
			})
		);
	});

	it('should not process the queue if isShowing is true', () => {
		// Define input type and message
		const notificationType = NotificationTypes.success;
		const notificationMessage = 'Test success message.';

		// Manually set the queue with a notification, set isShowing flag to true and trigger the processQueue method
		Reflect.set(service, 'queue', [
			{
				type: notificationType,
				icon: NotificationIcons[notificationType],
				message: notificationMessage
			}
		]);
		Reflect.set(service, 'isShowing', true);
		(Reflect.get(service, 'processQueue') as () => void).call(service);

		// Assert that the snackbar was never triggered
		expect(mockMatSnackBar.openFromComponent).not.toHaveBeenCalled();
	});

	it('should not process the queue if queue is empty', () => {
		// Manually set the queue empty, set isShowing flag to false and trigger the processQueue method
		Reflect.set(service, 'queue', []);
		Reflect.set(service, 'isShowing', false);
		(Reflect.get(service, 'processQueue') as () => void).call(service);

		// Assert that the snackbar was never triggered
		expect(mockMatSnackBar.openFromComponent).not.toHaveBeenCalled();
	});

	it('should process the queued notification and update internal state', () => {
		// Define input type, message, config, notification data and now timestamp
		const notificationType = NotificationTypes.success;
		const notificationMessage = 'Queued message';
		const snackBarConfig: MatSnackBarConfig = {
			duration: 1000,
			horizontalPosition: 'center',
			verticalPosition: 'bottom'
		};
		const notificationData: QueuedNotificationData = {
			type: notificationType,
			icon: NotificationIcons[notificationType],
			message: notificationMessage,
			config: snackBarConfig
		};
		const now = Date.now();

		// Spy on Date.now function call and override the returned value
		jest.spyOn(Date, 'now').mockReturnValue(now);

		// Mock dismissal trigger
		const afterDismissed$ = new Subject<void>();
		const mockSnackBarRef = {
			afterDismissed: () => afterDismissed$.asObservable()
		} as unknown as MatSnackBarRef<NotificationComponent>;

		// Mock the returned snackbar reference
		mockMatSnackBar.openFromComponent.mockReturnValue(mockSnackBarRef);

		// Manually set the queue with a notification, set isShowing flag to false and trigger the processQueue method
		Reflect.set(service, 'queue', [notificationData]);
		Reflect.set(service, 'isShowing', false);
		(Reflect.get(service, 'processQueue') as () => void).call(service);

		// Assert that the snackbar was triggered with the provided data and configuration
		expect(mockMatSnackBar.openFromComponent).toHaveBeenCalledWith(
			NotificationComponent,
			expect.objectContaining({
				data: {
					type: notificationType,
					icon: NotificationIcons[notificationType],
					message: notificationMessage
				},
				duration: snackBarConfig.duration,
				horizontalPosition: snackBarConfig.horizontalPosition,
				verticalPosition: snackBarConfig.verticalPosition,
				panelClass: [`notification-${notificationType}`]
			})
		);

		// Manually set the internal state before dismissal
		expect(Reflect.get(service, 'lastNotificationMessage')).toBe(notificationMessage);
		expect(Reflect.get(service, 'lastNotificationTimestamp')).toBe(now);
		expect(Reflect.get(service, 'lastNotificationDeduplicationWindow')).toBe(snackBarConfig.duration);
		expect(Reflect.get(service, 'isShowing')).toBe(true);

		// Simulate snackbar dismissal
		afterDismissed$.next();
		afterDismissed$.complete();

		// Assert that the isShowing flag is set to false after snackbar dismissal
		expect(Reflect.get(service, 'isShowing')).toBe(false);
	});

	it('should process the next queued notification after the current one is dismissed', () => {
		// Define inputs types and messages
		const notificationType1 = NotificationTypes.success;
		const notificationType2 = NotificationTypes.warning;
		const notificationMessage1 = 'First message';
		const notificationMessage2 = 'Second message';

		// Mock dismissal trigger
		const afterDismissed$ = new Subject<void>();
		const mockSnackBarRef = {
			afterDismissed: () => afterDismissed$.asObservable()
		} as unknown as MatSnackBarRef<NotificationComponent>;

		mockMatSnackBar.openFromComponent.mockReturnValue(mockSnackBarRef);

		// Trigger the first notification
		service.notify(notificationType1, notificationMessage1);

		// Queue the second notification
		service.notify(notificationType2, notificationMessage2);

		// Assert that the snackbar was triggered one time with the provided message
		expect(mockMatSnackBar.openFromComponent).toHaveBeenCalledTimes(1);
		expect(mockMatSnackBar.openFromComponent).toHaveBeenCalledWith(
			NotificationComponent,
			expect.objectContaining({
				data: expect.objectContaining({ message: notificationMessage1 })
			})
		);

		// Simulate snackbar dismissal
		afterDismissed$.next();
		afterDismissed$.complete();

		// Assert that the snackbar was triggered a second time with the provided message
		expect(mockMatSnackBar.openFromComponent).toHaveBeenCalledTimes(2);
		expect(mockMatSnackBar.openFromComponent).toHaveBeenLastCalledWith(
			NotificationComponent,
			expect.objectContaining({
				data: expect.objectContaining({ message: notificationMessage2 })
			})
		);
	});
});
