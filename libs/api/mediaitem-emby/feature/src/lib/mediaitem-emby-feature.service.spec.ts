import { Test } from '@nestjs/testing';
import { MediaitemEmbyFeatureService } from './mediaitem-emby-feature.service';

describe('MediaitemEmbyFeatureService', () => {
  let service: MediaitemEmbyFeatureService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [MediaitemEmbyFeatureService],
    }).compile();

    service = module.get(MediaitemEmbyFeatureService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
