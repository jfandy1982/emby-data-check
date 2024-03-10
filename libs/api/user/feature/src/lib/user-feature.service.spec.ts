import { Test } from '@nestjs/testing';
import { UserFeatureService } from './user-feature.service';

describe('UserFeatureService', () => {
  let service: UserFeatureService;

  const mockUserFeatureService = {};

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [UserFeatureService],
    })
      .overrideProvider(UserFeatureService)
      .useValue(mockUserFeatureService)
      .compile();

    service = module.get(UserFeatureService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
