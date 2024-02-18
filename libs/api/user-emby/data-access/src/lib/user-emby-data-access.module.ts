import { Module } from '@nestjs/common';
import { UserEmbyDataAccessController } from './user-emby-data-access.controller';
import { UserEmbyDataAccessService } from './user-emby-data-access.service';

@Module({
  controllers: [UserEmbyDataAccessController],
  providers: [UserEmbyDataAccessService],
  exports: [UserEmbyDataAccessService],
})
export class UserEmbyDataAccessModule {}
