/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerDocumentOptions, SwaggerCustomOptions, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api/v1';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;

  const config = new DocumentBuilder()
    .setTitle('Emby Data Check')
    .setDescription(
      '<p>The Emby Data Check API is the backend for an opinionated check tool of an Emby server. Please refer to <a href="https://github.com/jfandy1982/emby-data-check">this GitHub repository</a> for more context information.</p>'
    )
    .setVersion('v1')
    .addBearerAuth()
    .addTag('Emby')
    .build();
  const options: SwaggerDocumentOptions = {
    deepScanRoutes: true,
  };
  const customOptions: SwaggerCustomOptions = {
    customSiteTitle: 'Emby Data Check - API Docs',
  };
  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('api', app, document, customOptions);

  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}

bootstrap();
