import { Test } from '@nestjs/testing';
import { UserEdcFeatureService } from './user-edc-feature.service';

describe('UserEdcFeatureService', () => {
  let service: UserEdcFeatureService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [UserEdcFeatureService],
    }).compile();

    service = module.get(UserEdcFeatureService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
