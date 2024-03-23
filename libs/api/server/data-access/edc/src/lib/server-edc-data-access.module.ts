import { ServerEntity } from '@edc/shared-interfaces/db-interface';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServerEdcDataAccessService } from './server-edc-data-access.service';

@Module({
  imports: [TypeOrmModule.forFeature([ServerEntity])],
  providers: [ServerEdcDataAccessService],
  exports: [ServerEdcDataAccessService],
})
export class ServerEdcDataAccessModule {}
