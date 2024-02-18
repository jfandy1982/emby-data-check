import type { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerCustomOptions, SwaggerDocumentOptions, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(nestApplication: INestApplication, globalPrefix: string): void {
  const config = new DocumentBuilder()
    .setTitle('Emby Data Check')
    .setDescription(
      '<p>The Emby Data Check API is the backend for an opinionated check tool of an Emby server. Please refer to <a href="https://github.com/jfandy1982/emby-data-check">this GitHub repository</a> for more context information.</p>',
    )
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const options: SwaggerDocumentOptions = {
    deepScanRoutes: true,
  };
  const customOptions: SwaggerCustomOptions = {
    customSiteTitle: 'Emby Data Check - API Docs',
  };
  const document = SwaggerModule.createDocument(nestApplication, config, options);
  SwaggerModule.setup(globalPrefix + '/swagger', nestApplication, document, customOptions);
}
