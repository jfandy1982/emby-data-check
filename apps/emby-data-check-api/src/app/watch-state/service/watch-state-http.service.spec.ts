import { Test, TestingModule } from '@nestjs/testing';
import { WatchStateHttpService } from './watch-state-http.service';

describe('WatchStateHttpService', () => {
  let service: WatchStateHttpService;

  const mockWatchStateHttpService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WatchStateHttpService],
    })
      .overrideProvider(WatchStateHttpService)
      .useValue(mockWatchStateHttpService)
      .compile();

    service = module.get<WatchStateHttpService>(WatchStateHttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});