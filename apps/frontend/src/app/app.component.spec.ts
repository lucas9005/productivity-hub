import { render } from '@testing-library/angular';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
	let container: Element;

	beforeEach(async () => {
		const rendered = await render(AppComponent);
		container = rendered.container;
	});

	it('should render the router outlet <router-outlet> element', () => {
		const routerOutlet = container.querySelector('router-outlet');
		expect(routerOutlet).not.toBeNull();
	});
});
