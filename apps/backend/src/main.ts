import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
	const app = await NestFactory.create(AppModule);
	await app.listen(process.env.PORT ?? 3000);
}

bootstrap().catch((err) => {
	console.error('Unhandled error in bootstrap:', err);
	process.exit(1);
});
