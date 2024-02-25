import { Test } from '@nestjs/testing';
import { MediaitemEdcDataAccessService } from './mediaitem-edc-data-access.service';

describe('MediaitemEdcDataAccessService', () => {
  let service: MediaitemEdcDataAccessService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [MediaitemEdcDataAccessService],
    }).compile();

    service = module.get(MediaitemEdcDataAccessService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
