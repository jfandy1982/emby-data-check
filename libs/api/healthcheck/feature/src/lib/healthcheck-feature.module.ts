import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HealthcheckFeatureController } from './healthcheck-feature.controller';

@Module({
  imports: [TerminusModule],
  controllers: [HealthcheckFeatureController],
  providers: [],
  exports: [],
})
export class HealthcheckFeatureModule {}
