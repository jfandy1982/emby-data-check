import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { ServerDbService } from './service/server-db.service';
import { ServerHttpService } from './service/server-http.service';
import { ServerController } from './controller/server.controller';
import { InstallationEntity } from '../installation/models/installation.entity';
import { ServerEntity } from './models/server.entity';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([ServerEntity, InstallationEntity])],
  providers: [ServerDbService, ServerHttpService],
  controllers: [ServerController],
})
export class ServerModule {}
