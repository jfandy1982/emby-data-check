import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { WatchStateDbService } from './service/watch-state-db.service';
import { WatchStateHttpService } from './service/watch-state-http.service';
import { WatchStateController } from './controller/watch-state.controller';
import { WatchStateEntity } from './models/watch-state.entity';
import { ServerEntity } from '../server/models/server.entity';
import { EmbyUserEntity } from '../emby-user/models/emby-user.entity';
import { ServerDbService } from '../server/service/server-db.service';
import { EmbyUserDbService } from '../emby-user/service/emby-user-db.service';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([WatchStateEntity, ServerEntity, EmbyUserEntity])],
  providers: [WatchStateDbService, WatchStateHttpService, ServerDbService, EmbyUserDbService],
  controllers: [WatchStateController],
})
export class WatchStateModule {}
