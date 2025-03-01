import { Test } from '@nestjs/testing';
import { UserFeatureService } from './user-feature.service';

describe('UserFeatureService', () => {
  let service: UserFeatureService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [UserFeatureService],
    }).compile();

    service = module.get(UserFeatureService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
