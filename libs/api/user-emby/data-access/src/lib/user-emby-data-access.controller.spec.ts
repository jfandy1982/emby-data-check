import { Test } from '@nestjs/testing';
import { UserEmbyDataAccessController } from './user-emby-data-access.controller';
import { UserEmbyDataAccessService } from './user-emby-data-access.service';

describe('UserEmbyDataAccessController', () => {
  let controller: UserEmbyDataAccessController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [UserEmbyDataAccessService],
      controllers: [UserEmbyDataAccessController],
    }).compile();

    controller = module.get(UserEmbyDataAccessController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
