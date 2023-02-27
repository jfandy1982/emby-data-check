import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { EmbyUserDbService } from './service/emby-user-db.service';
import { EmbyUserHttpService } from './service/emby-user-http.service';
import { EmbyUserController } from './controller/emby-user.controller';
import { UserEntity } from '../user/models/user.entity';
import { EmbyUserEntity } from './models/emby-user.entity';
import { UserDbService } from '../user/service/user-db.service';
import { ServerDbService } from '../server/service/server-db.service';
import { ServerEntity } from '../server/models/server.entity';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([EmbyUserEntity, UserEntity, ServerEntity])],
  providers: [EmbyUserDbService, EmbyUserHttpService, UserDbService, ServerDbService],
  controllers: [EmbyUserController],
})
export class EmbyUserModule {}
