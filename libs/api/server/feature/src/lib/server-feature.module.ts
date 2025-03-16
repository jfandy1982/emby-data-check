import { Module } from '@nestjs/common';
import { ServerFeatureController } from './server-feature.controller';
import { ServerFeatureService } from './server-feature.service';

@Module({
  controllers: [ServerFeatureController],
  providers: [ServerFeatureService],
  exports: [ServerFeatureService],
})
export class ServerFeatureModule {}
