import { HealthcheckFeatureModule } from '@edc/api/healthcheck/feature';
import { ServerFeatureModule } from '@edc/api/server/feature';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as joi from 'joi';
import { ApiConfig, DbConfig, EmbyConfig } from './configEnvVars';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      expandVariables: true,
      load: [ApiConfig, DbConfig, EmbyConfig],
      validationSchema: joi.object({
        API_PORT: joi.number().min(1025).max(65535).default(3000),
        NODE_ENV: joi.string().valid('ci', 'development', 'production', 'test').default('development'),
      }),
      validationOptions: {
        allowUnknown: true,
        abortEarly: true,
      },
      validatePredefined: true,
    }),
    HealthcheckFeatureModule,
    ServerFeatureModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
