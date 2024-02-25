import { Module } from '@nestjs/common';
import { UserFeatureController } from './user-feature.controller';
import { UserFeatureService } from './user-feature.service';
import { UserEdcDataAccessModule } from '@edc/api/user/data-access/edc';
import { UserEmbyDataAccessModule } from '@edc/api/user/data-access/emby';

@Module({
  imports: [UserEdcDataAccessModule, UserEmbyDataAccessModule],
  controllers: [UserFeatureController],
  providers: [UserFeatureService],
})
export class UserFeatureModule {}
