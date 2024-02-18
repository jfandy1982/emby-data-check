import { Module } from '@nestjs/common';
import { UserEmbyFeatureController } from './user-emby-feature.controller';
import { UserEmbyFeatureService } from './user-emby-feature.service';

@Module({
  controllers: [UserEmbyFeatureController],
  providers: [UserEmbyFeatureService],
  exports: [UserEmbyFeatureService],
})
export class UserEmbyFeatureModule {}
