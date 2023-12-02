import { Test } from '@nestjs/testing';
import { ServerEdcFeatureService } from './server-edc-feature.service';

describe('ServerEdcFeatureService', () => {
  let service: ServerEdcFeatureService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ServerEdcFeatureService],
    }).compile();

    service = module.get(ServerEdcFeatureService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
