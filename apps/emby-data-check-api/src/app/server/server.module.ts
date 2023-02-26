import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { ServerService } from './service/server.service';
import { ServerController } from './controller/server.controller';
import { InstallationEntity } from '../installation/models/installation.entity';
import { ServerEntity } from './models/server.entity';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([ServerEntity, InstallationEntity])],
  providers: [ServerService],
  controllers: [ServerController],
})
export class ServerModule {}
