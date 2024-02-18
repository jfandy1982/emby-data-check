import { Module } from '@nestjs/common';
import { MediaitemEdcDataAccessController } from './mediaitem-edc-data-access.controller';
import { MediaitemEdcDataAccessService } from './mediaitem-edc-data-access.service';

@Module({
  controllers: [MediaitemEdcDataAccessController],
  providers: [MediaitemEdcDataAccessService],
  exports: [MediaitemEdcDataAccessService],
})
export class MediaitemEdcDataAccessModule {}
