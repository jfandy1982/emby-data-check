/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { environment, IApiConfigEnvVars, IEnvironment } from '@edc/shared/environment';
import { AppModule } from './app/app.module';
import { setupEnvironment, setupSwagger } from './util';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupEnvironment(app);

  // For typing reasons, the access to the prepared environment object is not possible here. EnvVars configs are potentially undefined.
  const port = app.get(ConfigService<IEnvironment, true>).get<IApiConfigEnvVars>('apiConfigEnvVars').api_port;
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  // TODO: revisit and secure this!
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
