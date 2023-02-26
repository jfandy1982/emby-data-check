import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { InstallationDbService } from './service/installation-db.service';
import { InstallationHttpService } from './service/installation-http.service';
import { InstallationController } from './controller/installation.controller';
import { ServerEntity } from '../server/models/server.entity';
import { InstallationEntity } from './models/installation.entity';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([InstallationEntity, ServerEntity])],
  providers: [InstallationDbService, InstallationHttpService],
  controllers: [InstallationController],
})
export class InstallationModule {}
