import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServerFeatureHealthModule } from 'api/feature-health';

@Module({
  imports: [ServerFeatureHealthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
