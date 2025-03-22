import { Module } from '@nestjs/common';
import { UserDataAccessEdcService } from './user-data-access-edc.service';

@Module({
  controllers: [],
  providers: [UserDataAccessEdcService],
  exports: [UserDataAccessEdcService],
})
export class UserDataAccessEdcModule {}
