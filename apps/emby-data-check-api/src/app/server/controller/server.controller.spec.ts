import { Test, TestingModule } from '@nestjs/testing';
import { ServerDbService } from '../service/server-db.service';
import { ServerHttpService } from '../service/server-http.service';
import { ServerController } from './server.controller';

describe('ServerController', () => {
  let controller: ServerController;

  const mockServerDbService = {};
  const mockServerHttpService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServerController],
      providers: [ServerDbService, ServerHttpService],
    })
      .overrideProvider(ServerDbService)
      .useValue(mockServerDbService)
      .overrideProvider(ServerHttpService)
      .useValue(mockServerHttpService)
      .compile();

    controller = module.get<ServerController>(ServerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
