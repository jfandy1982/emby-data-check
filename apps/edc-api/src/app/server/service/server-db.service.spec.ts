import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ServerDbService } from './server-db.service';
import { ServerEntity } from '@shared-interfaces/edc';

describe('ServerDbService', () => {
  let service: ServerDbService;

  const mockServerEntityRepository = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServerDbService, { provide: getRepositoryToken(ServerEntity), useValue: mockServerEntityRepository }],
    }).compile();

    service = module.get<ServerDbService>(ServerDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
