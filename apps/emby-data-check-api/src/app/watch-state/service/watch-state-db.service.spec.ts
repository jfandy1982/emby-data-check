import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { WatchStateEntity } from '../models/watch-state.entity';
import { WatchStateDbService } from './watch-state-db.service';

describe('WatchStateDbService', () => {
  let service: WatchStateDbService;

  const mockWatchStateEntityRepository = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WatchStateDbService, { provide: getRepositoryToken(WatchStateEntity), useValue: mockWatchStateEntityRepository }],
    }).compile();

    service = module.get<WatchStateDbService>(WatchStateDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
