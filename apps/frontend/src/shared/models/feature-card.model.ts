/**
 * Represents a feature card.
 */
export interface FeatureCard {
	/**
	 * Feature title.
	 */
	title: string;

	/**
	 * Name of the Angular Material icon.
	 */
	icon: string;

	/**
	 * Label describing the icon.
	 */
	label: string;

	/**
	 * Path to the feature card image.
	 */
	src: string;

	/**
	 * Alternative text describing the image.
	 */
	alt: string;

	/**
	 * Descriptive text of the feature.
	 */
	content: string;

	/**
	 * Class name for the feature card.
	 */
	className: string;
}
