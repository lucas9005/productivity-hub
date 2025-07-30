import { render } from '@testing-library/angular';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
	let container: Element;

	beforeEach(async () => {
		const rendered = await render(DashboardComponent);
		container = rendered.container;
	});

	it('should render the main <main> element', () => {
		const main = container.querySelector('main[role="main"]');
		expect(main).not.toBeNull();
	});
});
