import { Test } from '@nestjs/testing';
import { MediaitemDataAccessEdcService } from './mediaitem-data-access-edc.service';

describe('MediaitemDataAccessEdcService', () => {
  let service: MediaitemDataAccessEdcService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [MediaitemDataAccessEdcService],
    }).compile();

    service = module.get(MediaitemDataAccessEdcService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
