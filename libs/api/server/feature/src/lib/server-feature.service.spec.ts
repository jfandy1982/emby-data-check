import { Test } from '@nestjs/testing';
import { ServerFeatureService } from './server-feature.service';

describe('ServerFeatureService', () => {
  let service: ServerFeatureService;

  const mockServerFeatureService = {};

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ServerFeatureService],
    })
      .overrideProvider(ServerFeatureService)
      .useValue(mockServerFeatureService)
      .compile();

    service = module.get(ServerFeatureService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
