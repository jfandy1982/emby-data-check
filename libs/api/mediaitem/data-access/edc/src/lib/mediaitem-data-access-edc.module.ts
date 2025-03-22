import { Module } from '@nestjs/common';
import { MediaitemDataAccessEdcService } from './mediaitem-data-access-edc.service';

@Module({
  controllers: [],
  providers: [MediaitemDataAccessEdcService],
  exports: [MediaitemDataAccessEdcService],
})
export class MediaitemDataAccessEdcModule {}
