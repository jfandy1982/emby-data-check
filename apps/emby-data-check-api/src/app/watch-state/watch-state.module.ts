import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { WatchStateDbService } from './service/watch-state-db.service';
import { WatchStateHttpService } from './service/watch-state-http.service';
import { WatchStateController } from './controller/watch-state.controller';
import { WatchStateEntity } from './models/watch-state.entity';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([WatchStateEntity])],
  providers: [WatchStateDbService, WatchStateHttpService],
  controllers: [WatchStateController],
})
export class WatchStateModule {}
