import { Module } from '@nestjs/common';
import { EmbyUserService } from './service/emby-user.service';
import { EmbyUserController } from './controller/emby-user.controller';

@Module({
  providers: [EmbyUserService],
  controllers: [EmbyUserController],
})
export class EmbyUserModule {}
