import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('port');
  const env = configService.get('NODE_ENV');

  await app.listen(port, () => {
    console.info(`Server running evironment ${env} port ${port}`);
  });
}

bootstrap();
