import { Test } from '@nestjs/testing';
import { MediaitemEdcDataAccessService } from './mediaitem-edc-data-access.service';

describe('MediaitemEdcDataAccessService', () => {
  let service: MediaitemEdcDataAccessService;

  const mockMediaitemEdcDataAccessService = {};

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [MediaitemEdcDataAccessService],
    })
      .overrideProvider(MediaitemEdcDataAccessService)
      .useValue(mockMediaitemEdcDataAccessService)
      .compile();

    service = module.get(MediaitemEdcDataAccessService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
