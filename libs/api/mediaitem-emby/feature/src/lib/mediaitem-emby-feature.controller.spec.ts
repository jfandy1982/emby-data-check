import { Test } from '@nestjs/testing';
import { MediaitemEmbyFeatureController } from './mediaitem-emby-feature.controller';
import { MediaitemEmbyFeatureService } from './mediaitem-emby-feature.service';

describe('MediaitemEmbyFeatureController', () => {
  let controller: MediaitemEmbyFeatureController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [MediaitemEmbyFeatureService],
      controllers: [MediaitemEmbyFeatureController],
    }).compile();

    controller = module.get(MediaitemEmbyFeatureController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
