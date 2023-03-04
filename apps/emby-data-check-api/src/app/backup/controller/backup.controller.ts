import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BackupHttpService } from '../service/backup-http.service';

@ApiTags('backups')
@Controller('backups')
export class BackupController {
  constructor(private backupHttpService: BackupHttpService) {}
}
