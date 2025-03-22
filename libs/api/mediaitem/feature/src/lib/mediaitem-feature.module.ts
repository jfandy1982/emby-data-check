import { Module } from '@nestjs/common';
import { MediaitemFeatureController } from './mediaitem-feature.controller';
import { MediaitemFeatureService } from './mediaitem-feature.service';

@Module({
  controllers: [MediaitemFeatureController],
  providers: [MediaitemFeatureService],
  exports: [MediaitemFeatureService],
})
export class MediaitemFeatureModule {}
