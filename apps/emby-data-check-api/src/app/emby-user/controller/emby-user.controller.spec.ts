import { Test, TestingModule } from '@nestjs/testing';
import { EmbyUserController } from './emby-user.controller';

describe('EmbyUserController', () => {
  let controller: EmbyUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmbyUserController],
    }).compile();

    controller = module.get<EmbyUserController>(EmbyUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
