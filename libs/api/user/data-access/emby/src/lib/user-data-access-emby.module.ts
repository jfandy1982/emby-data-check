import { Module } from '@nestjs/common';
import { UserDataAccessEmbyService } from './user-data-access-emby.service';

@Module({
  controllers: [],
  providers: [UserDataAccessEmbyService],
  exports: [UserDataAccessEmbyService],
})
export class UserDataAccessEmbyModule {}
