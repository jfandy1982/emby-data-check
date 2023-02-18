import { Test, TestingModule } from '@nestjs/testing';
import { EmbyUserService } from './emby-user.service';

describe('EmbyUserService', () => {
  let service: EmbyUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmbyUserService],
    }).compile();

    service = module.get<EmbyUserService>(EmbyUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
