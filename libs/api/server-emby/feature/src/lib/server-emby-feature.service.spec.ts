import { Test } from '@nestjs/testing';
import { ServerEmbyFeatureService } from './server-emby-feature.service';

describe('ServerEmbyFeatureService', () => {
  let service: ServerEmbyFeatureService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ServerEmbyFeatureService],
    }).compile();

    service = module.get(ServerEmbyFeatureService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
