import { Test } from '@nestjs/testing';
import { UserEdcFeatureController } from './user-edc-feature.controller';
import { UserEdcFeatureService } from './user-edc-feature.service';

describe('UserEdcFeatureController', () => {
  let controller: UserEdcFeatureController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [UserEdcFeatureService],
      controllers: [UserEdcFeatureController],
    }).compile();

    controller = module.get(UserEdcFeatureController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
