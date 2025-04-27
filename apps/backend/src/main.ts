import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
	const app = await NestFactory.create(AppModule);
	const config = new DocumentBuilder().addBearerAuth().build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('api-docs', app, document, {
		swaggerOptions: { persistAuthorization: true, displayRequestDuration: true }
	});
	await app.listen(process.env.PORT ?? 3000);
}

bootstrap().catch((err) => {
	console.error('Unhandled error in bootstrap:', err);
	process.exit(1);
});
