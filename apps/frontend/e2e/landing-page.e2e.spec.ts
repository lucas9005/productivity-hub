import { expect, test } from '@playwright/test';

test.describe('Landing Page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('should display the page title', async ({ page }) => {
		await expect(page).toHaveTitle(/Productivity Hub/);
	});

	test('should display the login button', async ({ page }) => {
		const loginButton = page.getByRole('button', { name: 'Login to your account' });
		await expect(loginButton).toBeVisible();
	});

	test('should navigate to dashboard on login button click', async ({ page }) => {
		const loginButton = page.getByRole('button', { name: 'Login to your account' });
		await loginButton.click();
		await expect(page).toHaveURL('/dashboard');
	});

	test('should display all feature cards', async ({ page }) => {
		const cards = page.locator('main mat-card');
		await expect(cards).toHaveCount(5);
	});

	test('should display each feature card title', async ({ page }) => {
		const main = page.locator('main');
		const titles = ['Task Manager', 'Finance Tracker', 'Recipe Book', 'Travel Planner', 'Real-time Chat'];

		for (const title of titles) {
			const titleElement = main.getByRole('heading', { name: title });
			await expect(titleElement).toBeVisible();
		}
	});

	test('should display the footer', async ({ page }) => {
		const footer = page.locator('app-footer');
		await expect(footer).toBeVisible();
	});
});
