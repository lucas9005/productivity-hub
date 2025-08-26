import { ChangeDetectionStrategy, Component } from '@angular/core';
import type { SocialLink } from '@shared/models/social-link.model';

/**
 * Global footer component.
 *
 * Displays external social media links and a copyright/license
 * notice visible across all application pages.
 *
 * @example
 * <app-footer></app-footer>
 */
@Component({
	selector: 'app-footer',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [],
	templateUrl: './footer.component.html',
	styleUrl: './footer.component.scss'
})
export class FooterComponent {
	/**
	 * List of social links displayed in the UI.
	 */
	public readonly socialLinks: readonly SocialLink[] = [
		{
			href: 'https://github.com/lucas9005/productivity-hub',
			src: 'assets/images/social/github.png',
			alt: 'GitHub logo'
		},
		{
			href: 'https://www.linkedin.com/in/lucas9005',
			src: 'assets/images/social/linkedin.png',
			alt: 'LinkedIn logo'
		},
		{
			href: 'https://www.youtube.com',
			src: 'assets/images/social/youtube.png',
			alt: 'YouTube logo'
		},
		{
			href: 'https://www.instagram.com',
			src: 'assets/images/social/instagram.png',
			alt: 'Instagram logo'
		},
		{
			href: 'https://www.facebook.com',
			src: 'assets/images/social/facebook.png',
			alt: 'Facebook logo'
		},
		{
			href: 'https://x.com',
			src: 'assets/images/social/x.png',
			alt: 'Twitter logo'
		}
	];
}
