import { Test } from '@nestjs/testing';
import { UserEmbyDataAccessService } from './user-emby-data-access.service';

describe('UserEmbyDataAccessService', () => {
  let service: UserEmbyDataAccessService;

  const mockUserEmbyDataAccessService = {};

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [UserEmbyDataAccessService],
    })
      .overrideProvider(UserEmbyDataAccessService)
      .useValue(mockUserEmbyDataAccessService)
      .compile();

    service = module.get(UserEmbyDataAccessService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
