import { Module } from '@nestjs/common';
import { HealthcheckFeatureController } from './healthcheck-feature.controller';

@Module({
  controllers: [HealthcheckFeatureController],
  providers: [],
  exports: [],
})
export class HealthcheckFeatureModule {}
