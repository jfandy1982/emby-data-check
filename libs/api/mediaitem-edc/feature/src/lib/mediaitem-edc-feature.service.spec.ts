import { Test } from '@nestjs/testing';
import { MediaitemEdcFeatureService } from './mediaitem-edc-feature.service';

describe('MediaitemEdcFeatureService', () => {
  let service: MediaitemEdcFeatureService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [MediaitemEdcFeatureService],
    }).compile();

    service = module.get(MediaitemEdcFeatureService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
