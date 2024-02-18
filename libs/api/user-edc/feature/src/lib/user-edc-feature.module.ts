import { Module } from '@nestjs/common';
import { UserEdcFeatureController } from './user-edc-feature.controller';
import { UserEdcFeatureService } from './user-edc-feature.service';

@Module({
  controllers: [UserEdcFeatureController],
  providers: [UserEdcFeatureService],
  exports: [UserEdcFeatureService],
})
export class UserEdcFeatureModule {}
