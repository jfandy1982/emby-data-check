import { HealthcheckFeatureModule } from '@edc/api/healthcheck/feature';
import { Module } from '@nestjs/common';

@Module({
  imports: [HealthcheckFeatureModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
