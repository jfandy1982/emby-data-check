import { Test } from '@nestjs/testing';
import { MediaitemEmbyDataAccessController } from './mediaitem-emby-data-access.controller';
import { MediaitemEmbyDataAccessService } from './mediaitem-emby-data-access.service';

describe('MediaitemEmbyDataAccessController', () => {
  let controller: MediaitemEmbyDataAccessController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [MediaitemEmbyDataAccessService],
      controllers: [MediaitemEmbyDataAccessController],
    }).compile();

    controller = module.get(MediaitemEmbyDataAccessController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
