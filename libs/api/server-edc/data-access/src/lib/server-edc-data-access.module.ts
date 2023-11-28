import { Module } from '@nestjs/common';
import { ServerEdcDataAccessController } from './server-edc-data-access.controller';
import { ServerEdcDataAccessService } from './server-edc-data-access.service';

@Module({
  controllers: [ServerEdcDataAccessController],
  providers: [ServerEdcDataAccessService],
  exports: [ServerEdcDataAccessService],
})
export class ServerEdcDataAccessModule {}
