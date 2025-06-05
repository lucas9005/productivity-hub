import { render } from '@testing-library/angular';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
	let container: Element;

	beforeEach(async () => {
		const rendered = await render(FooterComponent);
		container = rendered.container;
	});

	it('should render the footer <footer> element', () => {
		const footer = container.querySelector('footer[role="contentinfo"]');
		expect(footer).not.toBeNull();
	});

	it('should render the footer nav <nav> element', () => {
		const nav = container.querySelector('footer nav[aria-label="Social media links"]');
		expect(nav).not.toBeNull();
	});

	it('should render the footer nav social media links <a> elements', () => {
		const githubLink = container.querySelector('footer nav a[href="https://github.com/lucas9005/productivity-hub"]');
		const linkedinLink = container.querySelector('footer nav a[href="https://www.linkedin.com/in/lucas9005"]');
		const youtubeLink = container.querySelector('footer nav a[href="https://www.youtube.com"]');
		const instagramLink = container.querySelector('footer nav a[href="https://www.instagram.com"]');
		const facebookLink = container.querySelector('footer nav a[href="https://www.facebook.com"]');
		const twitterLink = container.querySelector('footer nav a[href="https://x.com"]');
		expect(githubLink).not.toBeNull();
		expect(linkedinLink).not.toBeNull();
		expect(youtubeLink).not.toBeNull();
		expect(instagramLink).not.toBeNull();
		expect(facebookLink).not.toBeNull();
		expect(twitterLink).not.toBeNull();
	});

	it('should render the footer nav social media icons <img> elements', () => {
		const githubImg = container.querySelector('footer nav img[src="assets/images/social/github.png"][alt="GitHub logo"]');
		const linkedinImg = container.querySelector('footer nav img[src="assets/images/social/linkedin.png"][alt="LinkedIn logo"]');
		const youtubeImg = container.querySelector('footer nav img[src="assets/images/social/youtube.png"][alt="YouTube logo"]');
		const instagramImg = container.querySelector('footer nav img[src="assets/images/social/instagram.png"][alt="Instagram logo"]');
		const facebookImg = container.querySelector('footer nav img[src="assets/images/social/facebook.png"][alt="Facebook logo"]');
		const twitterImg = container.querySelector('footer nav img[src="assets/images/social/x.png"][alt="Twitter logo"]');
		expect(githubImg).not.toBeNull();
		expect(linkedinImg).not.toBeNull();
		expect(youtubeImg).not.toBeNull();
		expect(instagramImg).not.toBeNull();
		expect(facebookImg).not.toBeNull();
		expect(twitterImg).not.toBeNull();
	});

	it('should render the footer copyright text <p> element', () => {
		const copyrightElement = container.querySelector('footer p');
		const copyrightText = copyrightElement?.textContent?.trim();
		expect(copyrightElement).not.toBeNull();
		expect(copyrightText).toBe('© Productivity Hub 2025 — MIT License');
	});

	it('should render the footer license link <a> element', () => {
		const licenseLinkElement = container.querySelector('footer p a[href="https://github.com/lucas9005/productivity-hub/blob/dev/LICENSE.md"]');
		const licenseLinkText = licenseLinkElement?.textContent?.trim();
		expect(licenseLinkElement).not.toBeNull();
		expect(licenseLinkText).toBe('MIT License');
	});
});
