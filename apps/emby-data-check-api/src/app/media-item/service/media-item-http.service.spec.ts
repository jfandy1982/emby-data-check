import { Test, TestingModule } from '@nestjs/testing';
import { MediaItemHttpService } from './media-item-http.service';

describe('MediaItemHttpService', () => {
  let service: MediaItemHttpService;

  const mockMediaItemHttpService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MediaItemHttpService],
    })
      .overrideProvider(MediaItemHttpService)
      .useValue(mockMediaItemHttpService)
      .compile();

    service = module.get<MediaItemHttpService>(MediaItemHttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
