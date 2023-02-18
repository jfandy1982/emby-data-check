import { Module } from '@nestjs/common';
import { ServerService } from './service/server.service';
import { ServerController } from './controller/server.controller';

@Module({
  providers: [ServerService],
  controllers: [ServerController],
})
export class ServerModule {}
