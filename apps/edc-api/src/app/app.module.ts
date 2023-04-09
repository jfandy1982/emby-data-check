import { Module } from '@nestjs/common';

import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';

import { ServerModule } from './server/server.module';

@Module({
  imports: [ServerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
