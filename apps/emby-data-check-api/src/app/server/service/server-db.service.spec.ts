import { Test, TestingModule } from '@nestjs/testing';
import { ServerDbService } from './server-db.service';

describe('ServerDbService', () => {
  let service: ServerDbService;

  const mockServerDbService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServerDbService],
    })
      .overrideProvider(ServerDbService)
      .useValue(mockServerDbService)
      .compile();

    service = module.get<ServerDbService>(ServerDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
