jest.mock('@nestjs/core', () => ({
	NestFactory: {
		create: jest.fn().mockResolvedValue({
			listen: jest.fn()
		})
	}
}));

jest.mock('@nestjs/swagger', () => ({
	DocumentBuilder: jest.fn().mockImplementation(() => ({
		addBearerAuth: jest.fn().mockReturnThis(),
		build: jest.fn().mockReturnValue({})
	})),
	SwaggerModule: {
		createDocument: jest.fn(() => ({})),
		setup: jest.fn()
	}
}));

describe('Bootstrap (main.ts)', () => {
	beforeEach(() => {
		jest.resetModules();
	});

	it('should initialize the application without throwing', async () => {
		await import('./main');
	});
});
