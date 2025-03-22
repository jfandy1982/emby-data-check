import { Test } from '@nestjs/testing';
import { UserDataAccessEdcService } from './user-data-access-edc.service';

describe('UserDataAccessEdcService', () => {
  let service: UserDataAccessEdcService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [UserDataAccessEdcService],
    }).compile();

    service = module.get(UserDataAccessEdcService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
