import { render } from '@testing-library/angular';

import { LandingComponent } from './landing.component';

describe('LandingComponent', () => {
	let container: Element;

	beforeEach(async () => {
		const rendered = await render(LandingComponent);
		container = rendered.container;
	});

	it('should render the header <header> element', () => {
		const header = container.querySelector('header[role="banner"]');
		expect(header).not.toBeNull();
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

	it('should render the header login button <button> element', () => {
		const buttonElement = container.querySelector('header button[aria-label="Login to your account"]');
		const buttonText = buttonElement?.textContent?.trim();
		expect(buttonElement).not.toBeNull();
		expect(buttonText).toBe('Login');
	});

	it('should render the section <section> element', () => {
		const section = container.querySelector('section[role="region"]');
		expect(section).not.toBeNull();
	});

	it('should render the section heading <h2> element', () => {
		const headingElement = container.querySelector('section h2');
		const headingText = headingElement?.textContent?.trim();
		expect(headingElement).not.toBeNull();
		expect(headingText).toBe('All your productivity tools in one place.');
	});

	it('should render the section introduction text <p> element', () => {
		const introductionElement = container.querySelector('section p');
		const introductionText = introductionElement?.textContent?.trim();
		expect(introductionElement).not.toBeNull();
		expect(introductionText).toBe('Manage tasks, finances, recipes, travel plans, and real-time conversations — all with a single, streamlined platform.');
	});

	it('should render the main <main> element', () => {
		const main = container.querySelector('main[role="main"]');
		expect(main).not.toBeNull();
	});

	it('should render the main feature cards <mat-card> elements', () => {
		const taskCard = container.querySelector('main mat-card.task-card');
		const financeCard = container.querySelector('main mat-card.finance-card');
		const recipeCard = container.querySelector('main mat-card.recipe-card');
		const travelCard = container.querySelector('main mat-card.travel-card');
		const chatCard = container.querySelector('main mat-card.chat-card');
		expect(taskCard).not.toBeNull();
		expect(financeCard).not.toBeNull();
		expect(recipeCard).not.toBeNull();
		expect(travelCard).not.toBeNull();
		expect(chatCard).not.toBeNull();
	});

	it('should render the main feature card icons <mat-icon> elements', () => {
		const taskIcon = container.querySelector('main mat-card.task-card mat-icon[fontIcon="task"][aria-label="Task Manager icon"]');
		const financeIcon = container.querySelector('main mat-card.finance-card mat-icon[fontIcon="attach_money"][aria-label="Finance Tracker icon"]');
		const recipeIcon = container.querySelector('main mat-card.recipe-card mat-icon[fontIcon="restaurant"][aria-label="Recipe Book icon"]');
		const travelIcon = container.querySelector('main mat-card.travel-card mat-icon[fontIcon="flight"][aria-label="Travel Planner icon"]');
		const chatIcon = container.querySelector('main mat-card.chat-card mat-icon[fontIcon="chat"][aria-label="Real-time Chat icon"]');
		expect(taskIcon).not.toBeNull();
		expect(financeIcon).not.toBeNull();
		expect(recipeIcon).not.toBeNull();
		expect(travelIcon).not.toBeNull();
		expect(chatIcon).not.toBeNull();
	});

	it('should render the main feature card titles <span> elements', () => {
		const taskTitleElement = container.querySelector('main mat-card.task-card mat-card-title[role="heading"][aria-level="3"] span');
		const taskTitleText = taskTitleElement?.textContent?.trim();
		const financeTitleElement = container.querySelector('main mat-card.finance-card mat-card-title[role="heading"][aria-level="3"] span');
		const financeTitleText = financeTitleElement?.textContent?.trim();
		const recipeTitleElement = container.querySelector('main mat-card.recipe-card mat-card-title[role="heading"][aria-level="3"] span');
		const recipeTitleText = recipeTitleElement?.textContent?.trim();
		const travelTitleElement = container.querySelector('main mat-card.travel-card mat-card-title[role="heading"][aria-level="3"] span');
		const travelTitleText = travelTitleElement?.textContent?.trim();
		const chatTitleElement = container.querySelector('main mat-card.chat-card mat-card-title[role="heading"][aria-level="3"] span');
		const chatTitleText = chatTitleElement?.textContent?.trim();
		expect(taskTitleElement).not.toBeNull();
		expect(taskTitleText).toBe('Task Manager');
		expect(financeTitleElement).not.toBeNull();
		expect(financeTitleText).toBe('Finance Tracker');
		expect(recipeTitleElement).not.toBeNull();
		expect(recipeTitleText).toBe('Recipe Book');
		expect(travelTitleElement).not.toBeNull();
		expect(travelTitleText).toBe('Travel Planner');
		expect(chatTitleElement).not.toBeNull();
		expect(chatTitleText).toBe('Real-time Chat');
	});

	it('should render the main feature card images <img> elements', () => {
		const taskImg = container.querySelector('main mat-card.task-card img[src="assets/images/features/task.png"][alt="Task Manager illustration"]');
		const financeImg = container.querySelector('main mat-card.finance-card img[src="assets/images/features/finance.png"][alt="Finance Tracker illustration"]');
		const recipeImg = container.querySelector('main mat-card.recipe-card img[src="assets/images/features/recipe.png"][alt="Recipe Book illustration"]');
		const travelImg = container.querySelector('main mat-card.travel-card img[src="assets/images/features/travel.png"][alt="Travel Planner illustration"]');
		const chatImg = container.querySelector('main mat-card.chat-card img[src="assets/images/features/chat.png"][alt="Real-time Chat illustration"]');
		expect(taskImg).not.toBeNull();
		expect(financeImg).not.toBeNull();
		expect(recipeImg).not.toBeNull();
		expect(travelImg).not.toBeNull();
		expect(chatImg).not.toBeNull();
	});

	it('should render the main feature card descriptions <p> elements', () => {
		const taskDescriptionElement = container.querySelector('main mat-card.task-card mat-card-content p');
		const taskDescriptionText = taskDescriptionElement?.textContent?.trim();
		const financeDescriptionElement = container.querySelector('main mat-card.finance-card mat-card-content p');
		const financeDescriptionText = financeDescriptionElement?.textContent?.trim();
		const recipeDescriptionElement = container.querySelector('main mat-card.recipe-card mat-card-content p');
		const recipeDescriptionText = recipeDescriptionElement?.textContent?.trim();
		const travelDescriptionElement = container.querySelector('main mat-card.travel-card mat-card-content p');
		const travelDescriptionText = travelDescriptionElement?.textContent?.trim();
		const chatDescriptionElement = container.querySelector('main mat-card.chat-card mat-card-content p');
		const chatDescriptionText = chatDescriptionElement?.textContent?.trim();
		expect(taskDescriptionElement).not.toBeNull();
		expect(taskDescriptionText).toBe(
			'Create tasks, set priorities and deadlines, and organize them using filters and categories. Stay productive with a focused, structured task management designed for everyday use.'
		);
		expect(financeDescriptionElement).not.toBeNull();
		expect(financeDescriptionText).toBe(
			'Monitor income and expenses, set monthly budgets, and visualize your financial activity with dynamic charts. Gain insights into your spending habits to make smarter money decisions.'
		);
		expect(recipeDescriptionElement).not.toBeNull();
		expect(recipeDescriptionText).toBe('Organize your personal recipes with ingredients, instructions, and tags. Access them quickly while cooking, and share select recipes with others when needed.');
		expect(travelDescriptionElement).not.toBeNull();
		expect(travelDescriptionText).toBe(
			'Plan upcoming trips with detailed itineraries, reservations, and notes. Keep your travel information centralized and accessible for smooth, stress-free experiences.'
		);
		expect(chatDescriptionElement).not.toBeNull();
		expect(chatDescriptionText).toBe('Connect with friends and family through responsive, real-time messaging. Keep all your conversations in one place, organized and easy to follow.');
	});

	it('should render the footer <app-footer> element', () => {
		const footer = container.querySelector('app-footer');
		expect(footer).not.toBeNull();
	});
});
