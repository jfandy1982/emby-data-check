import { Test } from '@nestjs/testing';
import { HugoTestNestLibController } from './hugo-test-nest-lib.controller';
import { HugoTestNestLibService } from './hugo-test-nest-lib.service';

describe('HugoTestNestLibController', () => {
  let controller: HugoTestNestLibController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [HugoTestNestLibService],
      controllers: [HugoTestNestLibController],
    }).compile();

    controller = module.get(HugoTestNestLibController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
