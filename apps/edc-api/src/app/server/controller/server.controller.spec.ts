import { Test, TestingModule } from '@nestjs/testing';
import { ServerController } from './server.controller';
import { ServerDbService } from '../service/server-db.service';

describe('ServerController', () => {
  let controller: ServerController;

  const mockServerDbService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServerController],
      providers: [ServerDbService],
    })
      .overrideProvider(ServerDbService)
      .useValue(mockServerDbService)
      .compile();

    controller = module.get<ServerController>(ServerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
