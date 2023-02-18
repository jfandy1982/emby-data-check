import { Module } from '@nestjs/common';
import { WatchStateService } from './service/watch-state.service';
import { WatchStateController } from './controller/watch-state.controller';

@Module({
  providers: [WatchStateService],
  controllers: [WatchStateController],
})
export class WatchStateModule {}
