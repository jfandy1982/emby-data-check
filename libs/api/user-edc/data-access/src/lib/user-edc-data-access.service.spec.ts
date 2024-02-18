import { Test } from '@nestjs/testing';
import { UserEdcDataAccessService } from './user-edc-data-access.service';

describe('UserEdcDataAccessService', () => {
  let service: UserEdcDataAccessService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [UserEdcDataAccessService],
    }).compile();

    service = module.get(UserEdcDataAccessService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
