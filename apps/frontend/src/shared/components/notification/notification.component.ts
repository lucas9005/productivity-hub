import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { NotificationIcon, NotificationType } from '@shared/models/notification.model';

/**
 * Global notification component.
 *
 * Displays toast notification triggered by the `NotificationService`.
 * Handles notification type, icon and message automatically
 * injected via Angular Material's `MAT_SNACK_BAR_DATA`.
 *
 * @example
 * <app-notification></app-notification>
 */
@Component({
	selector: 'app-notification',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [MatIconModule],
	templateUrl: './notification.component.html',
	styleUrl: './notification.component.scss'
})
export class NotificationComponent {
	/**
	 * Injected snackbar data containing the notification type, icon, and message.
	 */
	public readonly _snackBarData = inject(MAT_SNACK_BAR_DATA) as {
		type: NotificationType;
		icon: NotificationIcon;
		message: string;
	};
	/**
	 * Injected snackbar reference for programmatic dismissal.
	 */
	private readonly _snackBarRef = inject(MatSnackBarRef);

	/**
	 * Closes the currently displayed snackbar.
	 * Triggered when the user clicks the close button.
	 */
	public close(): void {
		this._snackBarRef.dismiss();
	}
}
