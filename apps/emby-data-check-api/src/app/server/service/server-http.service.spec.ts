import { Test, TestingModule } from '@nestjs/testing';
import { ServerHttpService } from './server-http.service';

describe('ServerHttpService', () => {
  let service: ServerHttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServerHttpService],
    }).compile();

    service = module.get<ServerHttpService>(ServerHttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
