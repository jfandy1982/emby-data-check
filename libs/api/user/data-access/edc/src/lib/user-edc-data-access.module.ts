import { UserEntity } from '@edc/shared-interfaces/db-interface';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEdcDataAccessService } from './user-edc-data-access.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserEdcDataAccessService],
  exports: [UserEdcDataAccessService],
})
export class UserEdcDataAccessModule {}
