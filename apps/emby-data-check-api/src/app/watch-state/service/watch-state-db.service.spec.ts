import { Test, TestingModule } from '@nestjs/testing';
import { WatchStateDbService } from './watch-state-db.service';

describe('WatchStateDbService', () => {
  let service: WatchStateDbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WatchStateDbService],
    }).compile();

    service = module.get<WatchStateDbService>(WatchStateDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
