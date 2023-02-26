import { Test, TestingModule } from '@nestjs/testing';
import { EmbyUserHttpService } from './emby-user-http.service';

describe('EmbyUserHttpService', () => {
  let service: EmbyUserHttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmbyUserHttpService],
    }).compile();

    service = module.get<EmbyUserHttpService>(EmbyUserHttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
