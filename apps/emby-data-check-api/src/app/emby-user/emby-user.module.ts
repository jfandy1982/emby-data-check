import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { EmbyUserDbService } from './service/emby-user-db.service';
import { EmbyUserHttpService } from './service/emby-user-http.service';
import { EmbyUserController } from './controller/emby-user.controller';
import { UserEntity } from '../user/models/user.entity';
import { EmbyUserEntity } from './models/emby-user.entity';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([EmbyUserEntity, UserEntity])],
  providers: [EmbyUserDbService, EmbyUserHttpService],
  controllers: [EmbyUserController],
})
export class EmbyUserModule {}
