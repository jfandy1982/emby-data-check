import { Test, TestingModule } from '@nestjs/testing';
import { ServerDbService } from '../../server/service/server-db.service';
import { UserDbService } from '../../user/service/user-db.service';
import { EmbyUserDbService } from '../service/emby-user-db.service';
import { EmbyUserHttpService } from '../service/emby-user-http.service';
import { EmbyUserController } from './emby-user.controller';

describe('EmbyUserController', () => {
  let controller: EmbyUserController;

  const mockEmbyUserDbService = {};
  const mockEmbyUserHttpService = {};
  const mockUserDbService = {};
  const mockServerDbService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmbyUserController],
      providers: [EmbyUserDbService, EmbyUserHttpService, UserDbService, ServerDbService],
    })
      .overrideProvider(EmbyUserDbService)
      .useValue(mockEmbyUserDbService)
      .overrideProvider(EmbyUserHttpService)
      .useValue(mockEmbyUserHttpService)
      .overrideProvider(UserDbService)
      .useValue(mockUserDbService)
      .overrideProvider(ServerDbService)
      .useValue(mockServerDbService)
      .compile();

    controller = module.get<EmbyUserController>(EmbyUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
