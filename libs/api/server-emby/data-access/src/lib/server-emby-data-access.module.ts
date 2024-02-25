import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ServerEmbyDataAccessService } from './server-emby-data-access.service';

@Module({
  imports: [HttpModule],
  providers: [ServerEmbyDataAccessService],
  exports: [ServerEmbyDataAccessService],
})
export class ServerEmbyDataAccessModule {}
