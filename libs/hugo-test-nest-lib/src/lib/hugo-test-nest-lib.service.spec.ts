import { Test } from '@nestjs/testing';
import { HugoTestNestLibService } from './hugo-test-nest-lib.service';

describe('HugoTestNestLibService', () => {
  let service: HugoTestNestLibService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [HugoTestNestLibService],
    }).compile();

    service = module.get(HugoTestNestLibService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
