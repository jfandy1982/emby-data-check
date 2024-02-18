import { Test } from '@nestjs/testing';
import { MediaitemEdcDataAccessController } from './mediaitem-edc-data-access.controller';
import { MediaitemEdcDataAccessService } from './mediaitem-edc-data-access.service';

describe('MediaitemEdcDataAccessController', () => {
  let controller: MediaitemEdcDataAccessController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [MediaitemEdcDataAccessService],
      controllers: [MediaitemEdcDataAccessController],
    }).compile();

    controller = module.get(MediaitemEdcDataAccessController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
