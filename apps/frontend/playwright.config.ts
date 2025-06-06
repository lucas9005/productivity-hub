import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	testDir: './e2e',
	fullyParallel: true,
	forbidOnly: Boolean(process.env['CI']),
	retries: process.env['CI'] ? 2 : 0,
	workers: process.env['CI'] ? 1 : undefined,
	reporter: [['list'], ['html', { outputFolder: 'playwright/html-report', open: 'never' }], ['junit', { outputFile: 'playwright/junit-report/results.xml' }]],
	use: {
		baseURL: 'http://localhost:4200',
		trace: 'retain-on-failure',
		screenshot: 'only-on-failure',
		video: 'retain-on-failure'
	},
	outputDir: 'playwright/test-results',
	projects: [
		{
			name: 'Desktop',
			use: { ...devices['Desktop Chrome'] }
		},
		{
			name: 'Mobile Android',
			use: { ...devices['Pixel 5'] }
		},
		{
			name: 'Mobile iOS',
			use: { ...devices['iPhone 12'] }
		}
	],
	webServer: {
		command: 'bun run start:dev',
		url: 'http://localhost:4200',
		reuseExistingServer: !process.env['CI']
	}
});
