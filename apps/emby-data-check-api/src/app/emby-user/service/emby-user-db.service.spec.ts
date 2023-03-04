import { Test, TestingModule } from '@nestjs/testing';
import { EmbyUserDbService } from './emby-user-db.service';

describe('EmbyUserDbService', () => {
  let service: EmbyUserDbService;

  const mockEmbyUserDbService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmbyUserDbService],
    })
      .overrideProvider(EmbyUserDbService)
      .useValue(mockEmbyUserDbService)
      .compile();

    service = module.get<EmbyUserDbService>(EmbyUserDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
