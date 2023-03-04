import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { BackupController } from './controller/backup.controller';
import { BackupHttpService } from './service/backup-http.service';

@Module({
  imports: [HttpModule],
  providers: [BackupHttpService],
  controllers: [BackupController],
})
export class BackupModule {}
