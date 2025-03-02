import { HealthcheckFeatureModule } from '@edc/api/healthcheck/feature';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppConfig } from './config';
@Module({
  imports: [
    // TODO: add validation for configuration
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      expandVariables: true,
      load: [AppConfig],
    }),
    HealthcheckFeatureModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
