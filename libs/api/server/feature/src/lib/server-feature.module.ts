import { Module } from '@nestjs/common';
import { ServerFeatureController } from './server-feature.controller';
import { ServerFeatureService } from './server-feature.service';
import { ServerEdcDataAccessModule } from '@edc/api/server-edc/data-access';
import { ServerEmbyDataAccessModule } from '@edc/api/server-emby/data-access';

@Module({
  imports: [ServerEdcDataAccessModule, ServerEmbyDataAccessModule],
  controllers: [ServerFeatureController],
  providers: [ServerFeatureService],
})
export class ServerFeatureModule {}
