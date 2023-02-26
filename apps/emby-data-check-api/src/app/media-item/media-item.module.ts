import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { MediaItemDbService } from './service/media-item-db.service';
import { MediaItemHttpService } from './service/media-item-http.service';
import { MediaItemController } from './controller/media-item.controller';
import { MediaItemEntity } from './models/media-item.entity';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([MediaItemEntity])],
  providers: [MediaItemDbService, MediaItemHttpService],
  controllers: [MediaItemController],
})
export class MediaItemModule {}
