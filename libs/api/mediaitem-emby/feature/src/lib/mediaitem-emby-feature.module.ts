import { Module } from '@nestjs/common';
import { MediaitemEmbyFeatureController } from './mediaitem-emby-feature.controller';
import { MediaitemEmbyFeatureService } from './mediaitem-emby-feature.service';

@Module({
  controllers: [MediaitemEmbyFeatureController],
  providers: [MediaitemEmbyFeatureService],
  exports: [MediaitemEmbyFeatureService],
})
export class MediaitemEmbyFeatureModule {}
