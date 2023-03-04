import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { EmbyUserEntity } from '../models/emby-user.entity';
import { EmbyUserDbService } from './emby-user-db.service';

describe('EmbyUserDbService', () => {
  let service: EmbyUserDbService;

  const mockEmbyUserEntityRepository = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmbyUserDbService, { provide: getRepositoryToken(EmbyUserEntity), useValue: mockEmbyUserEntityRepository }],
    }).compile();

    service = module.get<EmbyUserDbService>(EmbyUserDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
