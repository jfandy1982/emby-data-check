import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { MediaItemDbService } from './service/media-item-db.service';
import { MediaItemHttpService } from './service/media-item-http.service';
import { MediaItemController } from './controller/media-item.controller';
import { MediaItemEntity } from './models/media-item.entity';
import { ServerEntity } from '../server/models/server.entity';
import { ServerDbService } from '../server/service/server-db.service';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([MediaItemEntity, ServerEntity])],
  providers: [MediaItemDbService, MediaItemHttpService, ServerDbService],
  controllers: [MediaItemController],
})
export class MediaItemModule {}
