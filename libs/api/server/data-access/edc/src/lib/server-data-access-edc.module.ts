import { Module } from '@nestjs/common';
import { ServerDataAccessEdcService } from './server-data-access-edc.service';

@Module({
  controllers: [],
  providers: [ServerDataAccessEdcService],
  exports: [ServerDataAccessEdcService],
})
export class ServerDataAccessEdcModule {}
