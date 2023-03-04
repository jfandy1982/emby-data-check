import { Test, TestingModule } from '@nestjs/testing';
import { UserDbService } from '../service/user-db.service';
import { UserHttpService } from '../service/user-http.service';
import { UserController } from './user.controller';

describe('UserController', () => {
  let controller: UserController;

  const mockUserDbService = {};
  const mockUserHttpService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserDbService, UserHttpService],
    })
      .overrideProvider(UserDbService)
      .useValue(mockUserDbService)
      .overrideProvider(UserHttpService)
      .useValue(mockUserHttpService)
      .compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
