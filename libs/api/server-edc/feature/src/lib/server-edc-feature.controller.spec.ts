import { Test } from '@nestjs/testing';
import { ServerEdcFeatureController } from './server-edc-feature.controller';
import { ServerEdcFeatureService } from './server-edc-feature.service';

describe('ServerEdcFeatureController', () => {
  let controller: ServerEdcFeatureController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ServerEdcFeatureService],
      controllers: [ServerEdcFeatureController],
    }).compile();

    controller = module.get(ServerEdcFeatureController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
