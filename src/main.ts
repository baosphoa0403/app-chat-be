import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());

  const configService = app.get(ConfigService);
  const port = configService.get('port');
  const env = configService.get('NODE_ENV');

  const config = new DocumentBuilder()
    .addCookieAuth('optional-session-id')
    .setTitle('app chat be')
    .setDescription('The information API description')
    .setVersion('1.0')
    .addTag('app chat be')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api', app, document);

  await app.listen(port, () => {
    console.info(`Server running environment ${env} on port ${port}`);
  });
}

bootstrap();
