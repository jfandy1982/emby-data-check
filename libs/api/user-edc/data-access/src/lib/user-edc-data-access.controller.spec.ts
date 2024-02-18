import { Test } from '@nestjs/testing';
import { UserEdcDataAccessController } from './user-edc-data-access.controller';
import { UserEdcDataAccessService } from './user-edc-data-access.service';

describe('UserEdcDataAccessController', () => {
  let controller: UserEdcDataAccessController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [UserEdcDataAccessService],
      controllers: [UserEdcDataAccessController],
    }).compile();

    controller = module.get(UserEdcDataAccessController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
