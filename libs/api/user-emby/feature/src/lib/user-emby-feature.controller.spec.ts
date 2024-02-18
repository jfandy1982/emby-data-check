import { Test } from '@nestjs/testing';
import { UserEmbyFeatureController } from './user-emby-feature.controller';
import { UserEmbyFeatureService } from './user-emby-feature.service';

describe('UserEmbyFeatureController', () => {
  let controller: UserEmbyFeatureController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [UserEmbyFeatureService],
      controllers: [UserEmbyFeatureController],
    }).compile();

    controller = module.get(UserEmbyFeatureController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
