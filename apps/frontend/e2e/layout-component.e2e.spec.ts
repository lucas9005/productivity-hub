import { expect, test } from '@playwright/test';

test.describe('Layout Component', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/dashboard');
	});

	test('should display the page title', async ({ page }) => {
		await expect(page).toHaveTitle(/Productivity Hub/);
	});

	test('should display the main menu button', async ({ page }) => {
		const mainMenuButton = page.getByRole('button', { name: 'Open the main menu' });
		await expect(mainMenuButton).toBeVisible();
	});

	test('should display the user menu button', async ({ page }) => {
		const userMenuButton = page.getByRole('button', { name: 'Open the user menu' });
		await expect(userMenuButton).toBeVisible();
	});

	test('should display all sidenav nav items', async ({ page }) => {
		const navItems = page.locator('mat-sidenav mat-list-item');
		await expect(navItems).toHaveCount(6);
	});

	test('should display each sidenav nav item label', async ({ page }) => {
		const mainMenuButton = page.getByRole('button', { name: 'Open the main menu' });
		await mainMenuButton.click();
		const sidenav = page.getByRole('navigation');
		const labels = ['Dashboard', 'Task Manager', 'Finance Tracker', 'Recipe Book', 'Travel Planner', 'Real-time Chat'];
		for (const label of labels) {
			const labelElement = sidenav.getByText(label, { exact: true });
			await expect(labelElement).toBeVisible();
		}
	});

	test('should display each user menu item label', async ({ page }) => {
		const userMenuButton = page.getByRole('button', { name: 'Open the user menu' });
		await userMenuButton.click();
		const menu = page.locator('div[role="menu"]');
		const labels = ['Settings', 'Logout'];
		for (const label of labels) {
			const labelElement = menu.getByText(label, { exact: true });
			await expect(labelElement).toBeVisible();
		}
	});

	test('should display the footer', async ({ page }) => {
		const footer = page.locator('app-footer');
		await expect(footer).toBeVisible();
	});
});
