import { Test } from '@nestjs/testing';
import { ServerEdcDataAccessService } from './server-edc-data-access.service';

describe('ServerEdcDataAccessService', () => {
  let service: ServerEdcDataAccessService;

  const mockServerEdcDataAccessService = {};

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ServerEdcDataAccessService],
    })
      .overrideProvider(ServerEdcDataAccessService)
      .useValue(mockServerEdcDataAccessService)
      .compile();

    service = module.get(ServerEdcDataAccessService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
