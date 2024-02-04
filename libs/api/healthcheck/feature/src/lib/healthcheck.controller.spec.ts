import { Test } from '@nestjs/testing';
import { HealthcheckController } from './healthcheck.controller';
import { HealthcheckService } from './healthcheck.service';

describe('HealthcheckController', () => {
  let controller: HealthcheckController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [HealthcheckService],
      controllers: [HealthcheckController],
    }).compile();

    controller = module.get(HealthcheckController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
