import { Test, TestingModule } from '@nestjs/testing';
import { EmbyUserDbService } from '../../emby-user/service/emby-user-db.service';
import { ServerDbService } from '../../server/service/server-db.service';
import { WatchStateDbService } from '../service/watch-state-db.service';
import { WatchStateHttpService } from '../service/watch-state-http.service';
import { WatchStateController } from './watch-state.controller';

describe('WatchStateController', () => {
  let controller: WatchStateController;

  const mockWatchStateDbService = {};
  const mockWatchStateHttpService = {};
  const mockServerDbService = {};
  const mockEmbyUserDbService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WatchStateController],
      providers: [WatchStateDbService, WatchStateHttpService, ServerDbService, EmbyUserDbService],
    })
      .overrideProvider(WatchStateDbService)
      .useValue(mockWatchStateDbService)
      .overrideProvider(WatchStateHttpService)
      .useValue(mockWatchStateHttpService)
      .overrideProvider(ServerDbService)
      .useValue(mockServerDbService)
      .overrideProvider(EmbyUserDbService)
      .useValue(mockEmbyUserDbService)
      .compile();

    controller = module.get<WatchStateController>(WatchStateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
