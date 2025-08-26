/**
 * Represents a navigation item.
 */
export interface NavItem {
	/**
	 * Path to the navigation route.
	 */
	routerLink: string;

	/**
	 * Name of the Angular Material icon.
	 */
	icon: string;

	/**
	 * Label describing the icon.
	 */
	label: string;

	/**
	 * Class name for the navigation item.
	 */
	className: string;
}
