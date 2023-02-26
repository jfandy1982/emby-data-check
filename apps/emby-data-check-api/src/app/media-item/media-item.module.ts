import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { MediaItemService } from './service/media-item.service';
import { MediaItemController } from './controller/media-item.controller';
import { MediaItemEntity } from './models/media-item.entity';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([MediaItemEntity])],
  providers: [MediaItemService],
  controllers: [MediaItemController],
})
export class MediaItemModule {}
