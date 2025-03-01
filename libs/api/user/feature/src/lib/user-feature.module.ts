import { Module } from '@nestjs/common';
import { UserFeatureController } from './user-feature.controller';
import { UserFeatureService } from './user-feature.service';

@Module({
  controllers: [UserFeatureController],
  providers: [UserFeatureService],
  exports: [UserFeatureService],
})
export class UserFeatureModule {}
