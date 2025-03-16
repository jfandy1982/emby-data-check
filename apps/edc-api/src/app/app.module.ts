import { HealthcheckFeatureModule } from '@edc/api/healthcheck/feature';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiConfig, DbConfig } from './configEnvVars';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      expandVariables: true,
      load: [ApiConfig, DbConfig],
    }),
    HealthcheckFeatureModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
