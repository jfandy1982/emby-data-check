import { Test } from '@nestjs/testing';
import { UserEmbyFeatureService } from './user-emby-feature.service';

describe('UserEmbyFeatureService', () => {
  let service: UserEmbyFeatureService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [UserEmbyFeatureService],
    }).compile();

    service = module.get(UserEmbyFeatureService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
