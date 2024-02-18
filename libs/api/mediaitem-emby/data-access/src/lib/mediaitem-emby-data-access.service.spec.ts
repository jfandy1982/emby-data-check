import { Test } from '@nestjs/testing';
import { MediaitemEmbyDataAccessService } from './mediaitem-emby-data-access.service';

describe('MediaitemEmbyDataAccessService', () => {
  let service: MediaitemEmbyDataAccessService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [MediaitemEmbyDataAccessService],
    }).compile();

    service = module.get(MediaitemEmbyDataAccessService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
