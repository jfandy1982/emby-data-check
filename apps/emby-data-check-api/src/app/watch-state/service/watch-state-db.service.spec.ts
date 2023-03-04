import { Test, TestingModule } from '@nestjs/testing';
import { WatchStateDbService } from './watch-state-db.service';

describe('WatchStateDbService', () => {
  let service: WatchStateDbService;

  const mockWatchStateDbService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WatchStateDbService],
    })
      .overrideProvider(WatchStateDbService)
      .useValue(mockWatchStateDbService)
      .compile();

    service = module.get<WatchStateDbService>(WatchStateDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
