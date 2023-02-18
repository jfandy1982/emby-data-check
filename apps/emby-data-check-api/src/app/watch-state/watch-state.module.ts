import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WatchStateService } from './service/watch-state.service';
import { WatchStateController } from './controller/watch-state.controller';
import { WatchStateEntity } from './models/watch-state.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WatchStateEntity])],
  providers: [WatchStateService],
  controllers: [WatchStateController],
})
export class WatchStateModule {}
