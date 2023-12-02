import { Test } from '@nestjs/testing';
import { ServerEmbyDataAccessService } from './server-emby-data-access.service';

describe('ServerEmbyDataAccessService', () => {
  let service: ServerEmbyDataAccessService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ServerEmbyDataAccessService],
    }).compile();

    service = module.get(ServerEmbyDataAccessService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
