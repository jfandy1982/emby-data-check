import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MediaitemEmbyDataAccessService } from './mediaitem-emby-data-access.service';

@Module({
  imports: [HttpModule],
  providers: [MediaitemEmbyDataAccessService],
  exports: [MediaitemEmbyDataAccessService],
})
export class MediaitemEmbyDataAccessModule {}
