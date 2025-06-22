import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { NotificationIcons, NotificationTypes } from '@shared/models/notification.model';
import { render } from '@testing-library/angular';

import { NotificationComponent } from './notification.component';

describe('NotificationComponent', () => {
	let container: Element;
	const mockData = {
		type: NotificationTypes.success,
		icon: NotificationIcons.success,
		message: 'Test message.'
	};
	const mockDismiss = jest.fn();

	beforeEach(async () => {
		const rendered = await render(NotificationComponent, {
			componentProviders: [
				{ provide: MAT_SNACK_BAR_DATA, useValue: mockData },
				{ provide: MatSnackBarRef, useValue: { dismiss: mockDismiss } }
			]
		});
		container = rendered.container;
	});

	it('should render the notification container <div> element', () => {
		const notificationContainer = container.querySelector('div.notification-container');
		expect(notificationContainer).not.toBeNull();
	});

	it('should render the notification icon <mat-icon> element', () => {
		const notificationIcon = container.querySelector(`div mat-icon[fonticon="${mockData.icon}"][aria-label="${mockData.type} icon"]`);
		expect(notificationIcon).not.toBeNull();
	});

	it('should render the notification message <p> element', () => {
		const messageElement = container.querySelector('div p.notification-message');
		const messageText = messageElement?.textContent?.trim();
		expect(messageElement).not.toBeNull();
		expect(messageText).toBe(mockData.message);
	});

	it('should render the notification close button <button> element', () => {
		const closeButton = container.querySelector('div button[aria-label="Close notification"]');
		expect(closeButton).not.toBeNull();
	});

	it('should call the close function when the notification close button <button> is clicked', () => {
		const closeButton = container.querySelector('div button[aria-label="Close notification"]');
		closeButton?.dispatchEvent(new Event('click'));
		expect(mockDismiss).toHaveBeenCalled();
	});
});
