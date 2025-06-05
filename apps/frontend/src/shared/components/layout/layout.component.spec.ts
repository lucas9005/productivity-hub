import { render } from '@testing-library/angular';

import { LayoutComponent } from './layout.component';

describe('LayoutComponent', () => {
	let container: Element;

	beforeEach(async () => {
		const rendered = await render(LayoutComponent);
		container = rendered.container;
	});

	it('should render the header <header> element', () => {
		const header = container.querySelector('header[role="banner"]');
		expect(header).not.toBeNull();
	});

	it('should render the header main menu button <button> element', () => {
		const mainMenuButton = container.querySelector('header button[aria-label="Open the main menu"]');
		expect(mainMenuButton).not.toBeNull();
	});

	it('should render the header logo <img> element', () => {
		const logoImg = container.querySelector('header img[src="assets/images/brand/logo.svg"][alt="Productivity Hub logo"]');
		expect(logoImg).not.toBeNull();
	});

	it('should render the header heading <h1> element', () => {
		const headingElement = container.querySelector('header h1');
		const headingText = headingElement?.textContent?.trim();
		expect(headingElement).not.toBeNull();
		expect(headingText).toBe('Productivity Hub');
	});

	it('should render the header user menu button <button> element', () => {
		const userMenuButton = container.querySelector('header button[aria-label="Open the user menu"]');
		expect(userMenuButton).not.toBeNull();
	});

	it('should render the sidenav <mat-sidenav> element', () => {
		const sidenav = container.querySelector('mat-sidenav[role="navigation"][aria-label="Main navigation menu"]');
		expect(sidenav).not.toBeNull();
	});

	it('should render the sidenav list items <mat-list-item> elements', () => {
		const dashboardItem = container.querySelector('mat-sidenav mat-list-item.dashboard-item');
		const taskItem = container.querySelector('mat-sidenav mat-list-item.task-item');
		const financeItem = container.querySelector('mat-sidenav mat-list-item.finance-item');
		const recipeItem = container.querySelector('mat-sidenav mat-list-item.recipe-item');
		const travelItem = container.querySelector('mat-sidenav mat-list-item.travel-item');
		const chatItem = container.querySelector('mat-sidenav mat-list-item.chat-item');
		expect(dashboardItem).not.toBeNull();
		expect(taskItem).not.toBeNull();
		expect(financeItem).not.toBeNull();
		expect(recipeItem).not.toBeNull();
		expect(travelItem).not.toBeNull();
		expect(chatItem).not.toBeNull();
	});

	it('should render the sidenav list item icons <mat-icon> elements', () => {
		const dashboardIcon = container.querySelector('mat-sidenav mat-list-item.dashboard-item mat-icon[fontIcon="dashboard"][aria-label="Dashboard icon"]');
		const taskIcon = container.querySelector('mat-sidenav mat-list-item.task-item mat-icon[fontIcon="task"][aria-label="Task Manager icon"]');
		const financeIcon = container.querySelector('mat-sidenav mat-list-item.finance-item mat-icon[fontIcon="attach_money"][aria-label="Finance Tracker icon"]');
		const recipeIcon = container.querySelector('mat-sidenav mat-list-item.recipe-item mat-icon[fontIcon="restaurant"][aria-label="Recipe Book icon"]');
		const travelIcon = container.querySelector('mat-sidenav mat-list-item.travel-item mat-icon[fontIcon="flight"][aria-label="Travel Planner icon"]');
		const chatIcon = container.querySelector('mat-sidenav mat-list-item.chat-item mat-icon[fontIcon="chat"][aria-label="Real-time Chat icon"]');
		expect(dashboardIcon).not.toBeNull();
		expect(taskIcon).not.toBeNull();
		expect(financeIcon).not.toBeNull();
		expect(recipeIcon).not.toBeNull();
		expect(travelIcon).not.toBeNull();
		expect(chatIcon).not.toBeNull();
	});

	it('should render the sidenav list item labels <span> elements', () => {
		const dashboardLabelElement = container.querySelector('mat-sidenav mat-list-item.dashboard-item span');
		const dashboardLabelText = dashboardLabelElement?.textContent?.trim();
		const taskLabelElement = container.querySelector('mat-sidenav mat-list-item.task-item span');
		const taskLabelText = taskLabelElement?.textContent?.trim();
		const financeLabelElement = container.querySelector('mat-sidenav mat-list-item.finance-item span');
		const financeLabelText = financeLabelElement?.textContent?.trim();
		const recipeLabelElement = container.querySelector('mat-sidenav mat-list-item.recipe-item span');
		const recipeLabelText = recipeLabelElement?.textContent?.trim();
		const travelLabelElement = container.querySelector('mat-sidenav mat-list-item.travel-item span');
		const travelLabelText = travelLabelElement?.textContent?.trim();
		const chatLabelElement = container.querySelector('mat-sidenav mat-list-item.chat-item span');
		const chatLabelText = chatLabelElement?.textContent?.trim();
		expect(dashboardLabelElement).not.toBeNull();
		expect(dashboardLabelText).toBe('Dashboard');
		expect(taskLabelElement).not.toBeNull();
		expect(taskLabelText).toBe('Task Manager');
		expect(financeLabelText).toBe('Finance Tracker');
		expect(recipeLabelElement).not.toBeNull();
		expect(recipeLabelText).toBe('Recipe Book');
		expect(travelLabelElement).not.toBeNull();
		expect(travelLabelText).toBe('Travel Planner');
		expect(chatLabelElement).not.toBeNull();
		expect(chatLabelText).toBe('Real-time Chat');
	});

	it('should render the sidenav content <mat-sidenav-content> element', () => {
		const sidenavContent = container.querySelector('mat-sidenav-content');
		expect(sidenavContent).not.toBeNull();
	});

	it('should render the sidenav content router outlet <router-outlet> element', () => {
		const routerOutlet = container.querySelector('mat-sidenav-content router-outlet');
		expect(routerOutlet).not.toBeNull();
	});

	it('should render the sidenav content footer <app-footer> element', () => {
		const footer = container.querySelector('mat-sidenav-content app-footer');
		expect(footer).not.toBeNull();
	});
});
