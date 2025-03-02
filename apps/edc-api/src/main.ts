/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { environment } from '@edc/shared/environment';
import { setupSwagger } from './util';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //const configService = app.get(ConfigService);
  //const port = configService.get('config.port');
  const port = 3000;
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  // TODO - revisit and secure this!
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  environment.production === true
    ? app.enableCors()
    : app.enableCors({
        origin: ['http://localhost:4200', 'http://localhost:4201', 'http://localhost:4202', 'http://localhost:4203'],
        credentials: true,
      });

  setupSwagger(app, globalPrefix);

  await app.listen(port, () => {
    Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
  });
}

bootstrap();
