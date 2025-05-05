import { Test } from '@nestjs/testing';
import { ServerDataAccessEmbyService } from './server-data-access-emby.service';
import { HttpModule } from '@nestjs/axios';

describe('ServerDataAccessEmbyService', () => {
  let service: ServerDataAccessEmbyService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [ServerDataAccessEmbyService],
    }).compile();

    service = module.get(ServerDataAccessEmbyService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
