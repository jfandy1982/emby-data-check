import { Module } from '@nestjs/common';
import { HealthcheckFeatureController } from './healthcheck-feature.controller';
import { HealthcheckFeatureService } from './healthcheck-feature.service';

@Module({
  controllers: [HealthcheckFeatureController],
  providers: [HealthcheckFeatureService],
  exports: [HealthcheckFeatureService],
})
export class HealthcheckFeatureModule {}
