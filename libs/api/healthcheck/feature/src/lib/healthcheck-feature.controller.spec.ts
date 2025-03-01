import { Test } from '@nestjs/testing';
import { HealthcheckFeatureController } from './healthcheck-feature.controller';
import { HealthcheckFeatureService } from './healthcheck-feature.service';

describe('HealthcheckFeatureController', () => {
  let controller: HealthcheckFeatureController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [HealthcheckFeatureService],
      controllers: [HealthcheckFeatureController],
    }).compile();

    controller = module.get(HealthcheckFeatureController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
