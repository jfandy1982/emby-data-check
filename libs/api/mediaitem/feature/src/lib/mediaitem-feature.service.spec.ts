import { Test } from '@nestjs/testing';
import { MediaitemFeatureService } from './mediaitem-feature.service';

describe('MediaitemFeatureService', () => {
  let service: MediaitemFeatureService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [MediaitemFeatureService],
    }).compile();

    service = module.get(MediaitemFeatureService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
