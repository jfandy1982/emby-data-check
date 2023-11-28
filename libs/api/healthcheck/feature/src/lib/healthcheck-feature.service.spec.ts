import { Test } from '@nestjs/testing';
import { HealthcheckFeatureService } from './healthcheck-feature.service';

describe('HealthcheckFeatureService', () => {
  let service: HealthcheckFeatureService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [HealthcheckFeatureService],
    }).compile();

    service = module.get(HealthcheckFeatureService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
