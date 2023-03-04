import { Test, TestingModule } from '@nestjs/testing';
import { MediaItemDbService } from './media-item-db.service';

describe('MediaItemService', () => {
  let service: MediaItemDbService;

  const mockMediaItemDbService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MediaItemDbService],
    })
      .overrideProvider(MediaItemDbService)
      .useValue(mockMediaItemDbService)
      .compile();

    service = module.get<MediaItemDbService>(MediaItemDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
