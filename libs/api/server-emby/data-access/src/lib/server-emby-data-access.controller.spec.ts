import { Test } from '@nestjs/testing';
import { ServerEmbyDataAccessController } from './server-emby-data-access.controller';
import { ServerEmbyDataAccessService } from './server-emby-data-access.service';

describe('ServerEmbyDataAccessController', () => {
  let controller: ServerEmbyDataAccessController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ServerEmbyDataAccessService],
      controllers: [ServerEmbyDataAccessController],
    }).compile();

    controller = module.get(ServerEmbyDataAccessController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
