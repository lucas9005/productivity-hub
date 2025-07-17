import { ComponentType } from '@angular/cdk/portal';
import { Injectable, inject } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { environment } from '@environments/environment';
import { NotificationComponent } from '@shared/components/notification/notification.component';
import { NotificationIcons, NotificationType, NotificationTypes, QueuedNotificationData } from '@shared/models/notification.model';

/**
 * Global notification service.
 *
 * Displays toast notifications using `NotificationComponent`.
 * Handles message normalization, deduplication, queuing,
 * and display logic using Angular Material's `MatSnackBar`.
 */
@Injectable({
	providedIn: 'root'
})
export class NotificationService {
	/**
	 * Injected snackbar service for notification management.
	 */
	private readonly _snackBar: MatSnackBar = inject(MatSnackBar);

	/**
	 * Default notification duration (in milliseconds) for displaying notifications.
	 */
	private readonly defaultNotificationDuration = 6000;

	/**
	 * Default notification deduplication window (in milliseconds) for suppressing duplicate notifications.
	 */
	private readonly defaultNotificationDeduplicationWindow = this.defaultNotificationDuration;

	/**
	 * Queue of pending notifications to be displayed.
	 */
	private queue: QueuedNotificationData[] = [];

	/**
	 * Message of the last displayed notification.
	 */
	private lastNotificationMessage = '';

	/**
	 * Timestamp of the last displayed notification.
	 */
	private lastNotificationTimestamp = 0;

	/**
	 * Deduplication window of the last displayed notification.
	 */
	private lastNotificationDeduplicationWindow = 0;

	/**
	 * Whether a notification is currently being displayed.
	 */
	private isShowing = false;

	/**
	 * Displays a toast notification of the given type.
	 *
	 * @param type - The severity/type of the notification.
	 * @param message - The message to display.
	 * @param config - Optional overrides for the snackbar display configuration.
	 */
	public notify(type: NotificationType, message: string, config?: Partial<MatSnackBarConfig>): void {
		const normalizedMessage = message?.toString().trim();
		if (!normalizedMessage) {
			return;
		}

		if (environment.production && environment.enableExternalLogging && (type === NotificationTypes.error || type === NotificationTypes.warning)) {
			this.logNotification(type, normalizedMessage);
		}

		const now = Date.now();
		const effectiveNotificationDeduplicationWindow = this.lastNotificationDeduplicationWindow ?? this.defaultNotificationDeduplicationWindow;
		if (normalizedMessage === this.lastNotificationMessage && now - this.lastNotificationTimestamp < effectiveNotificationDeduplicationWindow) {
			return;
		}

		this.queue.push({ type, icon: NotificationIcons[type], message: normalizedMessage, config });
		this.processQueue();
	}

	/**
	 * Processes the notification queue.
	 * Displays the first notification in the queue if none is currently being displayed
	 * and automatically proceeds to the next notification after dismissal.
	 */
	private processQueue(): void {
		if (this.isShowing || this.queue.length === 0) {
			return;
		}

		const { type, icon, message, config } = this.queue.shift()!;
		this.lastNotificationMessage = message;
		this.lastNotificationTimestamp = Date.now();
		this.lastNotificationDeduplicationWindow = config?.duration ?? this.defaultNotificationDeduplicationWindow;
		this.isShowing = true;

		const snackBarRef = this._snackBar.openFromComponent(
			NotificationComponent as ComponentType<NotificationComponent>,
			{
				data: { type, icon, message },
				duration: this.defaultNotificationDuration,
				horizontalPosition: 'center',
				verticalPosition: 'bottom',
				panelClass: [`notification-${type}`],
				...config
			} as MatSnackBarConfig
		);

		snackBarRef.afterDismissed().subscribe(() => {
			this.isShowing = false;
			this.processQueue();
		});
	}

	/**
	 * Send notifications to external logging service
	 *
	 * @param type - The severity/type of the notification.
	 * @param message - The message displayed.
	 */
	private logNotification(type: NotificationType, message: string): void {
		// TODO [Logging]: Move this to centralized LoggerService once implemented
		// eslint-disable-next-line no-console
		console.debug(`[NotificationLog] ${type.toUpperCase()}: ${message}`);
	}
}
