import { Module } from '@nestjs/common';
import { ServerFeatureController } from './server-feature.controller';
import { ServerFeatureService } from './server-feature.service';
import { ServerDataAccessEmbyModule } from '@edc/api/server/data-access/emby';
import { ServerDataAccessEdcModule } from '@edc/api/server/data-access/edc';

@Module({
  controllers: [ServerFeatureController],
  providers: [ServerFeatureService],
  exports: [ServerFeatureService],
  imports: [ServerDataAccessEmbyModule, ServerDataAccessEdcModule],
})
export class ServerFeatureModule {}
