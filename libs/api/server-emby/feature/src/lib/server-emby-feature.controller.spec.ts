import { Test } from '@nestjs/testing';
import { ServerEmbyFeatureController } from './server-emby-feature.controller';
import { ServerEmbyFeatureService } from './server-emby-feature.service';

describe('ServerEmbyFeatureController', () => {
  let controller: ServerEmbyFeatureController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ServerEmbyFeatureService],
      controllers: [ServerEmbyFeatureController],
    }).compile();

    controller = module.get(ServerEmbyFeatureController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
