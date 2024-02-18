import { Module } from '@nestjs/common';
import { MediaitemEdcFeatureController } from './mediaitem-edc-feature.controller';
import { MediaitemEdcFeatureService } from './mediaitem-edc-feature.service';

@Module({
  controllers: [MediaitemEdcFeatureController],
  providers: [MediaitemEdcFeatureService],
  exports: [MediaitemEdcFeatureService],
})
export class MediaitemEdcFeatureModule {}
