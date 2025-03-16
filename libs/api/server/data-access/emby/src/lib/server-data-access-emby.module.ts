import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ServerDataAccessEmbyService } from './server-data-access-emby.service';

@Module({
  imports: [HttpModule],
  controllers: [],
  providers: [ServerDataAccessEmbyService],
  exports: [ServerDataAccessEmbyService],
})
export class ServerDataAccessEmbyModule {}
