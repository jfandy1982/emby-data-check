import { Test, TestingModule } from '@nestjs/testing';
import { WatchStateController } from './watch-state.controller';

describe('WatchStateController', () => {
  let controller: WatchStateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WatchStateController],
    }).compile();

    controller = module.get<WatchStateController>(WatchStateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
