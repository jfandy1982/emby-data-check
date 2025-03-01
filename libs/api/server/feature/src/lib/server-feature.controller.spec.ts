import { Test } from '@nestjs/testing';
import { ServerFeatureController } from './server-feature.controller';
import { ServerFeatureService } from './server-feature.service';

describe('ServerFeatureController', () => {
  let controller: ServerFeatureController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ServerFeatureService],
      controllers: [ServerFeatureController],
    }).compile();

    controller = module.get(ServerFeatureController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
