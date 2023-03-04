import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ServerEntity } from '../models/server.entity';
import { ServerDbService } from './server-db.service';

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
