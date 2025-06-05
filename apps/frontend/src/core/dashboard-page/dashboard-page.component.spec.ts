import { render } from '@testing-library/angular';

import { DashboardPageComponent } from './dashboard-page.component';

describe('DashboardPageComponent', () => {
	let container: Element;

	beforeEach(async () => {
		const rendered = await render(DashboardPageComponent);
		container = rendered.container;
	});

	it('should render the main <main> element', () => {
		const main = container.querySelector('main[role="main"]');
		expect(main).not.toBeNull();
	});
});
