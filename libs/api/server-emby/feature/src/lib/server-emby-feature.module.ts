import { Module } from '@nestjs/common';
import { ServerEmbyFeatureController } from './server-emby-feature.controller';
import { ServerEmbyFeatureService } from './server-emby-feature.service';

@Module({
  controllers: [ServerEmbyFeatureController],
  providers: [ServerEmbyFeatureService],
  exports: [ServerEmbyFeatureService],
})
export class ServerEmbyFeatureModule {}
