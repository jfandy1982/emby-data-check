import { Test } from '@nestjs/testing';
import { ServerEdcDataAccessController } from './server-edc-data-access.controller';
import { ServerEdcDataAccessService } from './server-edc-data-access.service';

describe('ServerEdcDataAccessController', () => {
  let controller: ServerEdcDataAccessController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ServerEdcDataAccessService],
      controllers: [ServerEdcDataAccessController],
    }).compile();

    controller = module.get(ServerEdcDataAccessController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
