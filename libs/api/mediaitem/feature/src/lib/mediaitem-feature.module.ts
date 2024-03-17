import { MediaitemEdcDataAccessModule } from '@edc/api/mediaitem/data-access/edc';
import { MediaitemEmbyDataAccessModule } from '@edc/api/mediaitem/data-access/emby';
import { Module } from '@nestjs/common';
import { MediaitemFeatureController } from './mediaitem-feature.controller';
import { MediaitemFeatureService } from './mediaitem-feature.service';

@Module({
  imports: [MediaitemEdcDataAccessModule, MediaitemEmbyDataAccessModule],
  controllers: [MediaitemFeatureController],
  providers: [MediaitemFeatureService],
})
export class MediaitemFeatureModule {}
