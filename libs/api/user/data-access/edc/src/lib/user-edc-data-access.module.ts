import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEdcDataAccessService } from './user-edc-data-access.service';
import { UserEntity } from '@edc/shared-interfaces/db-interface';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserEdcDataAccessService],
  exports: [UserEdcDataAccessService],
})
export class UserEdcDataAccessModule {}
