import { RouterOutlet } from '@angular/router';
import { render } from '@testing-library/angular';

import { AppComponent } from './app.component';

describe('AppComponent Component', () => {
	let container: Element;

	beforeEach(async () => {
		const rendered = await render(AppComponent, {
			imports: [RouterOutlet]
		});
		container = rendered.container;
	});

	it('should render the <router-outlet> element', () => {
		const routerOutlet = container.querySelector('router-outlet');
		expect(routerOutlet).toBeTruthy();
	});
});
