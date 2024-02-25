import { MediaitemEdcDataAccessService } from '@edc/api/mediaitem-edc/data-access';
import { MediaitemEmbyDataAccessService } from '@edc/api/mediaitem-emby/data-access';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MediaitemFeatureService {
  constructor(
    private mediaitemEdcDataAccessService: MediaitemEdcDataAccessService,
    private mediaitemEmbyDataAccessService: MediaitemEmbyDataAccessService,
  ) {}
}
