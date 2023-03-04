import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserEntity } from '../models/user.entity';
import { UserDbService } from './user-db.service';

describe('UserDbService', () => {
  let service: UserDbService;

  const mockUserEntityRepository = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserDbService, { provide: getRepositoryToken(UserEntity), useValue: mockUserEntityRepository }],
    }).compile();

    service = module.get<UserDbService>(UserDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
