import { Module } from '@nestjs/common';
import { MediaitemEmbyDataAccessController } from './mediaitem-emby-data-access.controller';
import { MediaitemEmbyDataAccessService } from './mediaitem-emby-data-access.service';

@Module({
  controllers: [MediaitemEmbyDataAccessController],
  providers: [MediaitemEmbyDataAccessService],
  exports: [MediaitemEmbyDataAccessService],
})
export class MediaitemEmbyDataAccessModule {}
