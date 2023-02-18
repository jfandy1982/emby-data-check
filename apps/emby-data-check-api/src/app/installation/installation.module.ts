import { Module } from '@nestjs/common';
import { InstallationService } from './service/installation.service';
import { InstallationController } from './controller/installation.controller';

@Module({
  providers: [InstallationService],
  controllers: [InstallationController],
})
export class InstallationModule {}
