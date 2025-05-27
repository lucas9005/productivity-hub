import { render } from '@testing-library/angular';

import { LandingPageComponent } from './landing-page.component';

describe('LandingPageComponent Component', () => {
	let container: Element;

	beforeEach(async () => {
		const rendered = await render(LandingPageComponent);
		container = rendered.container;
	});

	it('should render the <header> element', () => {
		const header = container.querySelector('header');
		expect(header).not.toBeNull();
	});

	it('should render the header <img> element', () => {
		const logoImg = container.querySelector('header div img[src="assets/images/brand/logo.svg"][alt="Productivity Hub logo"]');
		expect(logoImg).toBeTruthy();
	});

	it('should render the header <h1> element', () => {
		const headingElement = container.querySelector('header div h1');
		const headingText = headingElement?.textContent?.trim();
		expect(headingElement).toBeTruthy();
		expect(headingText).toBe('Productivity Hub');
	});

	it('should render the header <button> element', () => {
		const buttonElement = container.querySelector('header button[aria-label="Login to your account"]');
		const buttonText = buttonElement?.textContent?.trim();
		expect(buttonElement).toBeTruthy();
		expect(buttonText).toBe('Login');
	});

	it('should render the <section> element', () => {
		const section = container.querySelector('section');
		expect(section).not.toBeNull();
	});

	it('should render the section <h2> element', () => {
		const headingElement = container.querySelector('section h2');
		const headingText = headingElement?.textContent?.trim();
		expect(headingElement).toBeTruthy();
		expect(headingText).toBe('All your productivity tools in one place.');
	});

	it('should render the section <p> element', () => {
		const paragraphElement = container.querySelector('section p');
		const paragraphText = paragraphElement?.textContent?.trim();
		expect(paragraphElement).toBeTruthy();
		expect(paragraphText).toBe('Manage tasks, finances, recipes, travel plans, and real-time conversations — all with a single, streamlined platform.');
	});

	it('should render the <main> element', () => {
		const main = container.querySelector('main');
		expect(main).not.toBeNull();
	});

	it('should render all main feature card <mat-card> elements', () => {
		const taskCard = container.querySelector('main mat-card.task-card');
		const financeCard = container.querySelector('main mat-card.finance-card');
		const recipeCard = container.querySelector('main mat-card.recipe-card');
		const travelCard = container.querySelector('main mat-card.travel-card');
		const chatCard = container.querySelector('main mat-card.chat-card');
		expect(taskCard).toBeTruthy();
		expect(financeCard).toBeTruthy();
		expect(recipeCard).toBeTruthy();
		expect(travelCard).toBeTruthy();
		expect(chatCard).toBeTruthy();
	});

	it('should render all main feature card <mat-icon> elements', () => {
		const taskIcon = container.querySelector('main mat-card.task-card mat-card-header mat-card-title mat-icon[fontIcon="task"][aria-label="Task Manager icon"]');
		const financeIcon = container.querySelector('main mat-card.finance-card mat-card-header mat-card-title mat-icon[fontIcon="attach_money"][aria-label="Finance Tracker icon"]');
		const recipeIcon = container.querySelector('main mat-card.recipe-card mat-card-header mat-card-title mat-icon[fontIcon="restaurant"][aria-label="Recipe Book icon"]');
		const travelIcon = container.querySelector('main mat-card.travel-card mat-card-header mat-card-title mat-icon[fontIcon="flight"][aria-label="Travel Planner icon"]');
		const chatIcon = container.querySelector('main mat-card.chat-card mat-card-header mat-card-title mat-icon[fontIcon="chat"][aria-label="Real-time Chat icon"]');
		expect(taskIcon).toBeTruthy();
		expect(financeIcon).toBeTruthy();
		expect(recipeIcon).toBeTruthy();
		expect(travelIcon).toBeTruthy();
		expect(chatIcon).toBeTruthy();
	});

	it('should render all main feature card title elements', () => {
		const taskTitleElement = container.querySelector('main mat-card.task-card mat-card-header mat-card-title');
		const taskTitleText = taskTitleElement?.textContent?.trim();
		const financeTitleElement = container.querySelector('main mat-card.finance-card mat-card-header mat-card-title');
		const financeTitleText = financeTitleElement?.textContent?.trim();
		const recipeTitleElement = container.querySelector('main mat-card.recipe-card mat-card-header mat-card-title');
		const recipeTitleText = recipeTitleElement?.textContent?.trim();
		const travelTitleElement = container.querySelector('main mat-card.travel-card mat-card-header mat-card-title');
		const travelTitleText = travelTitleElement?.textContent?.trim();
		const chatTitleElement = container.querySelector('main mat-card.chat-card mat-card-header mat-card-title');
		const chatTitleText = chatTitleElement?.textContent?.trim();
		expect(taskTitleElement).toBeTruthy();
		expect(taskTitleText).toBe('Task Manager');
		expect(financeTitleElement).toBeTruthy();
		expect(financeTitleText).toBe('Finance Tracker');
		expect(recipeTitleElement).toBeTruthy();
		expect(recipeTitleText).toBe('Recipe Book');
		expect(travelTitleElement).toBeTruthy();
		expect(travelTitleText).toBe('Travel Planner');
		expect(chatTitleElement).toBeTruthy();
		expect(chatTitleText).toBe('Real-time Chat');
	});

	it('should render all main feature card <img> elements', () => {
		const taskImg = container.querySelector('main mat-card.task-card img[src="assets/images/features/task.png"][alt="Task Manager illustration"]');
		const financeImg = container.querySelector('main mat-card.finance-card img[src="assets/images/features/finance.png"][alt="Finance Tracker illustration"]');
		const recipeImg = container.querySelector('main mat-card.recipe-card img[src="assets/images/features/recipe.png"][alt="Recipe Book illustration"]');
		const travelImg = container.querySelector('main mat-card.travel-card img[src="assets/images/features/travel.png"][alt="Travel Planner illustration"]');
		const chatImg = container.querySelector('main mat-card.chat-card img[src="assets/images/features/chat.png"][alt="Real-time Chat illustration"]');
		expect(taskImg).toBeTruthy();
		expect(financeImg).toBeTruthy();
		expect(recipeImg).toBeTruthy();
		expect(travelImg).toBeTruthy();
		expect(chatImg).toBeTruthy();
	});

	it('should render all main feature card <p> elements', () => {
		const taskParagraphElement = container.querySelector('main mat-card.task-card mat-card-content p');
		const taskParagraphText = taskParagraphElement?.textContent?.trim();
		const financeParagraphElement = container.querySelector('main mat-card.finance-card mat-card-content p');
		const financeParagraphText = financeParagraphElement?.textContent?.trim();
		const recipeParagraphElement = container.querySelector('main mat-card.recipe-card mat-card-content p');
		const recipeParagraphText = recipeParagraphElement?.textContent?.trim();
		const travelParagraphElement = container.querySelector('main mat-card.travel-card mat-card-content p');
		const travelParagraphText = travelParagraphElement?.textContent?.trim();
		const chatParagraphElement = container.querySelector('main mat-card.chat-card mat-card-content p');
		const chatParagraphText = chatParagraphElement?.textContent?.trim();
		expect(taskParagraphElement).toBeTruthy();
		expect(taskParagraphText).toBe(
			'Create tasks, set priorities and deadlines, and organize them using filters and categories. Stay productive with a focused, structured task management designed for everyday use.'
		);
		expect(financeParagraphElement).toBeTruthy();
		expect(financeParagraphText).toBe(
			'Monitor income and expenses, set monthly budgets, and visualize your financial activity with dynamic charts. Gain insights into your spending habits to make smarter money decisions.'
		);
		expect(recipeParagraphElement).toBeTruthy();
		expect(recipeParagraphText).toBe('Organize your personal recipes with ingredients, instructions, and tags. Access them quickly while cooking, and share select recipes with others when needed.');
		expect(travelParagraphElement).toBeTruthy();
		expect(travelParagraphText).toBe(
			'Plan upcoming trips with detailed itineraries, reservations, and notes. Keep your travel information centralized and accessible for smooth, stress-free experiences.'
		);
		expect(chatParagraphElement).toBeTruthy();
		expect(chatParagraphText).toBe('Connect with friends and family through responsive, real-time messaging. Keep all your conversations in one place, organized and easy to follow.');
	});

	it('should render the <footer> element', () => {
		const footer = container.querySelector('app-footer');
		expect(footer).not.toBeNull();
	});
});
