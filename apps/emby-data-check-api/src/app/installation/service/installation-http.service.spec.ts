import { Test, TestingModule } from '@nestjs/testing';
import { InstallationHttpService } from './installation-http.service';

describe('InstallationHttpService', () => {
  let service: InstallationHttpService;

  const mockInstallationHttpService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstallationHttpService],
    })
      .overrideProvider(InstallationHttpService)
      .useValue(mockInstallationHttpService)
      .compile();

    service = module.get<InstallationHttpService>(InstallationHttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
