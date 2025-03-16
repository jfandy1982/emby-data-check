import { Module } from '@nestjs/common';
import { ServerDataAccessEmbyService } from './server-data-access-emby.service';

@Module({
  controllers: [],
  providers: [ServerDataAccessEmbyService],
  exports: [ServerDataAccessEmbyService],
})
export class ServerDataAccessEmbyModule {}
