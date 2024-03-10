import { Test } from '@nestjs/testing';
import { MediaitemFeatureService } from './mediaitem-feature.service';

describe('MediaitemFeatureService', () => {
  let service: MediaitemFeatureService;

  const mockMediaitemFeatureService = {};

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [MediaitemFeatureService],
    })
      .overrideProvider(MediaitemFeatureService)
      .useValue(mockMediaitemFeatureService)
      .compile();

    service = module.get(MediaitemFeatureService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
