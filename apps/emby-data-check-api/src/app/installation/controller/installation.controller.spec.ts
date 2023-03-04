import { Test, TestingModule } from '@nestjs/testing';
import { ServerDbService } from '../../server/service/server-db.service';
import { InstallationDbService } from '../service/installation-db.service';
import { InstallationHttpService } from '../service/installation-http.service';
import { InstallationController } from './installation.controller';

describe('InstallationController', () => {
  let controller: InstallationController;

  const mockInstallationDbService = {};
  const mockInstallationHttpService = {};
  const mockServerDbService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InstallationController],
      providers: [InstallationDbService, InstallationHttpService, ServerDbService],
    })
      .overrideProvider(InstallationDbService)
      .useValue(mockInstallationDbService)
      .overrideProvider(InstallationHttpService)
      .useValue(mockInstallationHttpService)
      .overrideProvider(ServerDbService)
      .useValue(mockServerDbService)
      .compile();

    controller = module.get<InstallationController>(InstallationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
