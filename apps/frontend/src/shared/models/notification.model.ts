/**
 * Supported notification types.
 * Each type maps to a severity level.
 */
export const NotificationTypes = {
	success: 'success',
	error: 'error',
	warning: 'warning',
	info: 'info'
} as const;

/**
 * Type union representing all supported notification types.
 */
export type NotificationType = (typeof NotificationTypes)[keyof typeof NotificationTypes];

/**
 * Supported notification icons.
 * Each type maps to a notification icon.
 */
export const NotificationIcons = {
	success: 'check_circle_outline',
	error: 'error_outline',
	warning: 'warning_amber',
	info: 'info'
} as const;

/**
 * Type union representing all supported Material icons.
 */
export type NotificationIcon = (typeof NotificationIcons)[keyof typeof NotificationIcons];
