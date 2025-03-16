import { Module } from '@nestjs/common';
import { MediaitemDataAccessEmbyService } from './mediaitem-data-access-emby.service';

@Module({
  controllers: [],
  providers: [MediaitemDataAccessEmbyService],
  exports: [MediaitemDataAccessEmbyService],
})
export class MediaitemDataAccessEmbyModule {}
