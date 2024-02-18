import { Module } from '@nestjs/common';
import { UserEdcDataAccessController } from './user-edc-data-access.controller';
import { UserEdcDataAccessService } from './user-edc-data-access.service';

@Module({
  controllers: [UserEdcDataAccessController],
  providers: [UserEdcDataAccessService],
  exports: [UserEdcDataAccessService],
})
export class UserEdcDataAccessModule {}
