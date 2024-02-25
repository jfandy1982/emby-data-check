import { MediaitemEdcDataAccessService } from '@edc/api/mediaitem/data-access/edc';
import { MediaitemEmbyDataAccessService } from '@edc/api/mediaitem/data-access/emby';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MediaitemFeatureService {
  constructor(
    private mediaitemEdcDataAccessService: MediaitemEdcDataAccessService,
    private mediaitemEmbyDataAccessService: MediaitemEmbyDataAccessService,
  ) {}
}
