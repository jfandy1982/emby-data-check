import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstallationService } from './service/installation.service';
import { InstallationController } from './controller/installation.controller';
import { ServerEntity } from '../server/models/server.entity';
import { InstallationEntity } from './models/installation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InstallationEntity, ServerEntity])],
  providers: [InstallationService],
  controllers: [InstallationController],
})
export class InstallationModule {}
