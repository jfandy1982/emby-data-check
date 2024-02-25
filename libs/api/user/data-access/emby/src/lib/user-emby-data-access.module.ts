import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { UserEmbyDataAccessService } from './user-emby-data-access.service';

@Module({
  imports: [HttpModule],
  providers: [UserEmbyDataAccessService],
  exports: [UserEmbyDataAccessService],
})
export class UserEmbyDataAccessModule {}
