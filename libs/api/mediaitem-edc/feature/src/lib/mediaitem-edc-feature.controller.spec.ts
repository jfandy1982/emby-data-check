import { Test } from '@nestjs/testing';
import { MediaitemEdcFeatureController } from './mediaitem-edc-feature.controller';
import { MediaitemEdcFeatureService } from './mediaitem-edc-feature.service';

describe('MediaitemEdcFeatureController', () => {
  let controller: MediaitemEdcFeatureController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [MediaitemEdcFeatureService],
      controllers: [MediaitemEdcFeatureController],
    }).compile();

    controller = module.get(MediaitemEdcFeatureController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
