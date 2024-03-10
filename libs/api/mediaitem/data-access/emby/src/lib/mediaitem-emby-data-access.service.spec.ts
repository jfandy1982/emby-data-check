import { Test } from '@nestjs/testing';
import { MediaitemEmbyDataAccessService } from './mediaitem-emby-data-access.service';

describe('MediaitemEmbyDataAccessService', () => {
  let service: MediaitemEmbyDataAccessService;

  const mockMediaitemEmbyDataAccessService = {};

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [MediaitemEmbyDataAccessService],
    })
      .overrideProvider(MediaitemEmbyDataAccessService)
      .useValue(mockMediaitemEmbyDataAccessService)
      .compile();

    service = module.get(MediaitemEmbyDataAccessService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
