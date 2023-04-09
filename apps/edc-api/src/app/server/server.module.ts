import { Module } from '@nestjs/common';
import { ServerDbService } from './service/server-db.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServerEntity } from '@shared-interfaces/edc';
import { ServerController } from './controller/server.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ServerEntity])],
  controllers: [ServerController],
  providers: [ServerDbService],
})
export class ServerModule {}
