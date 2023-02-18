import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmbyUserModule } from './emby-user/emby-user.module';
import { InstallationModule } from './installation/installation.module';
import { MediaItemModule } from './media-item/media-item.module';
import { ServerModule } from './server/server.module';
import { UserModule } from './user/user.module';
import { WatchStateModule } from './watch-state/watch-state.module';

@Module({
  imports: [EmbyUserModule, InstallationModule, MediaItemModule, ServerModule, UserModule, WatchStateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
