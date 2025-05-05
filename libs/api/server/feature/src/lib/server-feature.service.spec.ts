import { Test } from '@nestjs/testing';
import { ServerFeatureService } from './server-feature.service';
import { ServerDataAccessEmbyModule } from '@edc/api/server/data-access/emby';
import { ServerDataAccessEdcModule } from '@edc/api/server/data-access/edc';

describe('ServerFeatureService', () => {
  let service: ServerFeatureService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [ServerDataAccessEmbyModule, ServerDataAccessEdcModule],
      providers: [ServerFeatureService],
    }).compile();

    service = module.get(ServerFeatureService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
