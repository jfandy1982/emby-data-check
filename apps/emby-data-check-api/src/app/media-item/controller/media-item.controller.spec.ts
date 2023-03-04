import { Test, TestingModule } from '@nestjs/testing';
import { ServerDbService } from '../../server/service/server-db.service';
import { MediaItemDbService } from '../service/media-item-db.service';
import { MediaItemHttpService } from '../service/media-item-http.service';
import { MediaItemController } from './media-item.controller';

describe('MediaItemController', () => {
  let controller: MediaItemController;

  const mockMediaItemDbService = {};
  const mockMediaItemHttpService = {};
  const mockServerDbService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MediaItemController],
      providers: [MediaItemDbService, MediaItemHttpService, ServerDbService],
    })
      .overrideProvider(MediaItemDbService)
      .useValue(mockMediaItemDbService)
      .overrideProvider(MediaItemHttpService)
      .useValue(mockMediaItemHttpService)
      .overrideProvider(ServerDbService)
      .useValue(mockServerDbService)
      .compile();

    controller = module.get<MediaItemController>(MediaItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
