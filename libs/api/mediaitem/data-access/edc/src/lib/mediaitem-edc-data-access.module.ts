import { ItemEntity } from '@edc/shared-interfaces/db-interface';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MediaitemEdcDataAccessService } from './mediaitem-edc-data-access.service';

@Module({
  imports: [TypeOrmModule.forFeature([ItemEntity])],
  providers: [MediaitemEdcDataAccessService],
  exports: [MediaitemEdcDataAccessService],
})
export class MediaitemEdcDataAccessModule {}
