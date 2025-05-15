import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController Controller', () => {
	let controller: AppController;
	let service: jest.Mocked<AppService>;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [AppController],
			providers: [
				{
					provide: AppService,
					useValue: {
						getHello: jest.fn()
					}
				}
			]
		}).compile();

		controller = module.get(AppController);
		service = module.get(AppService) as jest.Mocked<AppService>;
	});

	describe('getHello()', () => {
		it('should return greeting from service', () => {
			service.getHello.mockReturnValue('Hello World!');
			const result = controller.getHello();
			expect(result).toBe('Hello World!');
		});
	});
});
