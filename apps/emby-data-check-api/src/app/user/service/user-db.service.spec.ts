import { Test, TestingModule } from '@nestjs/testing';
import { UserDbService } from './user-db.service';

describe('UserDbService', () => {
  let service: UserDbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserDbService],
    }).compile();

    service = module.get<UserDbService>(UserDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
