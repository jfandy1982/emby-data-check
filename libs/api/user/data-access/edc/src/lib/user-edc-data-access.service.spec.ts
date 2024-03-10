import { Test } from '@nestjs/testing';
import { UserEdcDataAccessService } from './user-edc-data-access.service';

describe('UserEdcDataAccessService', () => {
  let service: UserEdcDataAccessService;

  const mockUserEdcDataAccessService = {};

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [UserEdcDataAccessService],
    })
      .overrideProvider(UserEdcDataAccessService)
      .useValue(mockUserEdcDataAccessService)
      .compile();

    service = module.get(UserEdcDataAccessService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
