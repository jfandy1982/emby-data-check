import { Module } from '@nestjs/common';
import { ServerEdcFeatureController } from './server-edc-feature.controller';
import { ServerEdcFeatureService } from './server-edc-feature.service';

@Module({
  controllers: [ServerEdcFeatureController],
  providers: [ServerEdcFeatureService],
  exports: [ServerEdcFeatureService],
})
export class ServerEdcFeatureModule {}
