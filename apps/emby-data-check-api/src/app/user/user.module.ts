import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { EmbyUserEntity } from '../emby-user/models/emby-user.entity';
import { UserEntity } from './models/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, EmbyUserEntity])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
