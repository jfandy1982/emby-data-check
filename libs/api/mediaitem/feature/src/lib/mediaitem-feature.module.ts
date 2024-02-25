import { Module } from '@nestjs/common';
import { MediaitemFeatureController } from './mediaitem-feature.controller';
import { MediaitemFeatureService } from './mediaitem-feature.service';
import { MediaitemEdcDataAccessModule } from '@edc/api/mediaitem-edc/data-access';
import { MediaitemEmbyDataAccessModule } from '@edc/api/mediaitem-emby/data-access';

@Module({
  imports: [MediaitemEdcDataAccessModule, MediaitemEmbyDataAccessModule],
  controllers: [MediaitemFeatureController],
  providers: [MediaitemFeatureService],
})
export class MediaitemFeatureModule {}
