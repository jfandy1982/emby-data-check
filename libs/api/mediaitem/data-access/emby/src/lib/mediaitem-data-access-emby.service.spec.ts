import { Test } from '@nestjs/testing';
import { MediaitemDataAccessEmbyService } from './mediaitem-data-access-emby.service';

describe('MediaitemDataAccessEmbyService', () => {
  let service: MediaitemDataAccessEmbyService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [MediaitemDataAccessEmbyService],
    }).compile();

    service = module.get(MediaitemDataAccessEmbyService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
