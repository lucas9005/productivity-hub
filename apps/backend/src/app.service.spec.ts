import { Test, TestingModule } from '@nestjs/testing';

import { AppService } from './app.service';

describe('AppService Service', () => {
	let service: AppService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [AppService]
		}).compile();

		service = module.get(AppService);
	});

	describe('getHello()', () => {
		it('should return "Hello World!"', () => {
			expect(service.getHello()).toBe('Hello World!');
		});
	});
});
