import { Test } from '@nestjs/testing';
import { MediaitemFeatureController } from './mediaitem-feature.controller';
import { MediaitemFeatureService } from './mediaitem-feature.service';

describe('MediaitemFeatureController', () => {
  let controller: MediaitemFeatureController;

  const mockMediaitemFeatureService = {};

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [MediaitemFeatureService],
      controllers: [MediaitemFeatureController],
    })
      .overrideProvider(MediaitemFeatureService)
      .useValue(mockMediaitemFeatureService)
      .compile();

    controller = module.get(MediaitemFeatureController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
