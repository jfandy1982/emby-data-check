import { DynamicModule, Module } from '@nestjs/common';
import { DbType } from './db-type.enum';

@Module({})
export class AppModule {
  static register(options: { appDataDb: DbType; appAnalyticsDb: DbType }): DynamicModule {
    const { appDataDb, appAnalyticsDb } = options;
    const dbTypes = Array.from(new Set([appDataDb, appAnalyticsDb]));
    return {
      module: AppModule,
      //imports: [CoreModule.forRoot({ dbTypes })],
    };
  }
}
