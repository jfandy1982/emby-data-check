import { Test, TestingModule } from '@nestjs/testing';
import { InstallationDbService } from './installation-db.service';

describe('InstallationService', () => {
  let service: InstallationDbService;

  const mockInstallationDbService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstallationDbService],
    })
      .overrideProvider(InstallationDbService)
      .useValue(mockInstallationDbService)
      .compile();

    service = module.get<InstallationDbService>(InstallationDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
