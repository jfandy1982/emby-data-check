import { Test, TestingModule } from '@nestjs/testing';
import { ServerHttpService } from './server-http.service';

describe('ServerHttpService', () => {
  let service: ServerHttpService;

  const mockServerHttpService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServerHttpService],
    })
      .overrideProvider(ServerHttpService)
      .useValue(mockServerHttpService)
      .compile();

    service = module.get<ServerHttpService>(ServerHttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
