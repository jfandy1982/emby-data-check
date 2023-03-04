import { Test, TestingModule } from '@nestjs/testing';
import { UserHttpService } from './user-http.service';

describe('UserHttpService', () => {
  let service: UserHttpService;

  const mockUserHttpService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserHttpService],
    })
      .overrideProvider(UserHttpService)
      .useValue(mockUserHttpService)
      .compile();

    service = module.get<UserHttpService>(UserHttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
