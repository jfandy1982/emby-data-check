import { Test } from '@nestjs/testing';
import { UserDataAccessEmbyService } from './user-data-access-emby.service';

describe('UserDataAccessEmbyService', () => {
  let service: UserDataAccessEmbyService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [UserDataAccessEmbyService],
    }).compile();

    service = module.get(UserDataAccessEmbyService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
