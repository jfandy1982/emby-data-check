import { Test, TestingModule } from '@nestjs/testing';
import { UserHttpService } from './user-http.service';

describe('UserHttpService', () => {
  let service: UserHttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserHttpService],
    }).compile();

    service = module.get<UserHttpService>(UserHttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
