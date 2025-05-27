import { render } from '@testing-library/angular';

import { FooterComponent } from './footer.component';

describe('FooterComponent Component', () => {
	let container: Element;

	beforeEach(async () => {
		const rendered = await render(FooterComponent);
		container = rendered.container;
	});

	it('should render the <footer> element', () => {
		const footer = container.querySelector('footer');
		expect(footer).not.toBeNull();
	});

	it('should render the <nav> element', () => {
		const nav = container.querySelector('footer nav[aria-label="Social media links"]');
		expect(nav).not.toBeNull();
	});

	it('should render all footer social media <a> elements', () => {
		const githubLink = container.querySelector('footer nav a[href="https://github.com/lucas9005/productivity-hub"]');
		const linkedinLink = container.querySelector('footer nav a[href="https://www.linkedin.com/in/lucas9005"]');
		const youtubeLink = container.querySelector('footer nav a[href="https://www.youtube.com"]');
		const instagramLink = container.querySelector('footer nav a[href="https://www.instagram.com"]');
		const facebookLink = container.querySelector('footer nav a[href="https://www.facebook.com"]');
		const twitterLink = container.querySelector('footer nav a[href="https://x.com"]');
		expect(githubLink).toBeTruthy();
		expect(linkedinLink).toBeTruthy();
		expect(youtubeLink).toBeTruthy();
		expect(instagramLink).toBeTruthy();
		expect(facebookLink).toBeTruthy();
		expect(twitterLink).toBeTruthy();
	});

	it('should render all footer social media <img> elements', () => {
		const githubImg = container.querySelector('footer nav img[src="assets/images/social/github.png"][alt="GitHub logo"]');
		const linkedinImg = container.querySelector('footer nav img[src="assets/images/social/linkedin.png"][alt="LinkedIn logo"]');
		const youtubeImg = container.querySelector('footer nav img[src="assets/images/social/youtube.png"][alt="YouTube logo"]');
		const instagramImg = container.querySelector('footer nav img[src="assets/images/social/instagram.png"][alt="Instagram logo"]');
		const facebookImg = container.querySelector('footer nav img[src="assets/images/social/facebook.png"][alt="Facebook logo"]');
		const twitterImg = container.querySelector('footer nav img[src="assets/images/social/x.png"][alt="Twitter logo"]');
		expect(githubImg).toBeTruthy();
		expect(linkedinImg).toBeTruthy();
		expect(youtubeImg).toBeTruthy();
		expect(instagramImg).toBeTruthy();
		expect(facebookImg).toBeTruthy();
		expect(twitterImg).toBeTruthy();
	});

	it('should render the footer copyright element', () => {
		const copyrightElement = container.querySelector('footer p');
		const copyrightText = copyrightElement?.textContent?.trim();
		expect(copyrightElement).toBeTruthy();
		expect(copyrightText).toBe('© Productivity Hub 2025 — MIT License');
	});

	it('should render the footer license <a> element', () => {
		const licenseLinkElement = container.querySelector('footer p a[href="https://github.com/lucas9005/productivity-hub/blob/dev/LICENSE.md"]');
		const licenseLinkText = licenseLinkElement?.textContent?.trim();
		expect(licenseLinkElement).toBeTruthy();
		expect(licenseLinkText).toBe('MIT License');
	});
});
