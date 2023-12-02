import { Module } from '@nestjs/common';
import { ServerEmbyDataAccessController } from './server-emby-data-access.controller';
import { ServerEmbyDataAccessService } from './server-emby-data-access.service';

@Module({
  controllers: [ServerEmbyDataAccessController],
  providers: [ServerEmbyDataAccessService],
  exports: [ServerEmbyDataAccessService],
})
export class ServerEmbyDataAccessModule {}
