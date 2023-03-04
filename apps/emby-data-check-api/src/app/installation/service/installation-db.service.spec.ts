import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { InstallationEntity } from '../models/installation.entity';
import { InstallationDbService } from './installation-db.service';

describe('InstallationService', () => {
  let service: InstallationDbService;

  const mockInstallationEntityRepository = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstallationDbService, { provide: getRepositoryToken(InstallationEntity), useValue: mockInstallationEntityRepository }],
    }).compile();

    service = module.get<InstallationDbService>(InstallationDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
