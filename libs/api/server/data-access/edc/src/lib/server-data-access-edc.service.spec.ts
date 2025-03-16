import { Test } from '@nestjs/testing';
import { ServerDataAccessEdcService } from './server-data-access-edc.service';

describe('ServerDataAccessEdcService', () => {
  let service: ServerDataAccessEdcService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ServerDataAccessEdcService],
    }).compile();

    service = module.get(ServerDataAccessEdcService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
