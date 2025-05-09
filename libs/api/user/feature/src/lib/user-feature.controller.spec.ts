import { Test } from '@nestjs/testing';
import { UserFeatureController } from './user-feature.controller';
import { UserFeatureService } from './user-feature.service';

describe('UserFeatureController', () => {
  let controller: UserFeatureController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [UserFeatureService],
      controllers: [UserFeatureController],
    }).compile();

    controller = module.get(UserFeatureController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
