import { Test, TestingModule } from '@nestjs/testing';
import { InstallationController } from './installation.controller';

describe('InstallationController', () => {
  let controller: InstallationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InstallationController],
    }).compile();

    controller = module.get<InstallationController>(InstallationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
