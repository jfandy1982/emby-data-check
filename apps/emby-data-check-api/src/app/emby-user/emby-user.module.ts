import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmbyUserService } from './service/emby-user.service';
import { EmbyUserController } from './controller/emby-user.controller';
import { UserEntity } from '../user/models/user.entity';
import { EmbyUserEntity } from './models/emby-user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmbyUserEntity, UserEntity])],
  providers: [EmbyUserService],
  controllers: [EmbyUserController],
})
export class EmbyUserModule {}
