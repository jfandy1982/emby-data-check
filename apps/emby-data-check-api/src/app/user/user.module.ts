import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { UserDbService } from './service/user-db.service';
import { UserHttpService } from './service/user-http.service';
import { UserController } from './controller/user.controller';
import { EmbyUserEntity } from '../emby-user/models/emby-user.entity';
import { UserEntity } from './models/user.entity';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([UserEntity, EmbyUserEntity])],
  providers: [UserDbService, UserHttpService],
  controllers: [UserController],
})
export class UserModule {}
