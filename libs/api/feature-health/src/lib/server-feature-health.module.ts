import { Module } from '@nestjs/common';
import { ServerFeatureHealthController } from './server-feature-health.controller';
import { TerminusModule } from '@nestjs/terminus';

@Module({
  imports: [TerminusModule],
  controllers: [ServerFeatureHealthController],
  providers: [],
  exports: [],
})
export class ServerFeatureHealthModule {}
