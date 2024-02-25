import { Module } from '@nestjs/common';
import { MediaitemEdcDataAccessService } from './mediaitem-edc-data-access.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemEntity } from '@edc/shared-interfaces/db-interface';

@Module({
  imports: [TypeOrmModule.forFeature([ItemEntity])],
  providers: [MediaitemEdcDataAccessService],
  exports: [MediaitemEdcDataAccessService],
})
export class MediaitemEdcDataAccessModule {}
