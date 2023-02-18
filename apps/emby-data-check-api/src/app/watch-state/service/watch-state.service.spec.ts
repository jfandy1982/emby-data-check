import { Test, TestingModule } from '@nestjs/testing';
import { WatchStateService } from './watch-state.service';

describe('WatchStateService', () => {
  let service: WatchStateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WatchStateService],
    }).compile();

    service = module.get<WatchStateService>(WatchStateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
