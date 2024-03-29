import { ServerEdcDataAccessModule } from '@edc/api/server/data-access/edc';
import { ServerEmbyDataAccessModule } from '@edc/api/server/data-access/emby';
import { Module } from '@nestjs/common';
import { ServerFeatureController } from './server-feature.controller';
import { ServerFeatureService } from './server-feature.service';

@Module({
  imports: [ServerEdcDataAccessModule, ServerEmbyDataAccessModule],
  controllers: [ServerFeatureController],
  providers: [ServerFeatureService],
})
export class ServerFeatureModule {}
