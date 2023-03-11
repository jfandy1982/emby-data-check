import { Test, TestingModule } from '@nestjs/testing';
import { BackupHttpService } from '../service/backup-http.service';
import { BackupController } from './backup.controller';

describe('BackupController', () => {
  let controller: BackupController;

  const mockBackupHttpService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BackupController],
      providers: [BackupHttpService],
    })
      .overrideProvider(BackupHttpService)
      .useValue(mockBackupHttpService)
      .compile();

    controller = module.get<BackupController>(BackupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
