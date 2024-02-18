/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

import { environment } from '@edc/shared-util/environment';

import { setupSwagger } from './util';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const port = configService.get('config.port');
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  // TODO - revisit and secure this!
  environment.production === true
    ? app.enableCors()
    : app.enableCors({
        origin: ['http://localhost:4200', 'http://localhost:4201', 'http://localhost:4202'],
        credentials: true,
      });

  setupSwagger(app, globalPrefix);

  await app.listen(port, () => {
    Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
  });
}

bootstrap();
