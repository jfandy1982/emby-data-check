import { Test } from '@nestjs/testing';
import { UserEmbyDataAccessService } from './user-emby-data-access.service';

describe('UserEmbyDataAccessService', () => {
  let service: UserEmbyDataAccessService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [UserEmbyDataAccessService],
    }).compile();

    service = module.get(UserEmbyDataAccessService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
