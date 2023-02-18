import { Module } from '@nestjs/common';
import { MediaItemService } from './service/media-item.service';
import { MediaItemController } from './controller/media-item.controller';

@Module({
  providers: [MediaItemService],
  controllers: [MediaItemController],
})
export class MediaItemModule {}
