import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { DbType } from './app/db-type.enum';

async function bootstrap() {
  const appDataDb = (process.env.APP_DATA_DB as DbType) ?? DbType.IN_MEMORY;

  const app = await NestFactory.create(AppModule.register({ appDataDb, appAnalyticsDb: appDataDb }));

  app.enableShutdownHooks();

  await app.listen(process.env.PORT || 3000);
}

void bootstrap();
