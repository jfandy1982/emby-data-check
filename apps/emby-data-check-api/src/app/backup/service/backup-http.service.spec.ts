import { Test, TestingModule } from '@nestjs/testing';
import { BackupHttpService } from './backup-http.service';

describe('BackupHttpService', () => {
  let service: BackupHttpService;

  const mockBackupHttpService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BackupHttpService],
    })
      .overrideProvider(BackupHttpService)
      .useValue(mockBackupHttpService)
      .compile();

    service = module.get<BackupHttpService>(BackupHttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
