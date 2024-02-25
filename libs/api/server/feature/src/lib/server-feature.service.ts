import { ServerEdcDataAccessService } from '@edc/api/server-edc/data-access';
import { ServerEmbyDataAccessService } from '@edc/api/server-emby/data-access';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ServerFeatureService {
  constructor(
    private serverEdcDataAccessService: ServerEdcDataAccessService,
    private serverEmbyDataAccessService: ServerEmbyDataAccessService,
  ) {}
}
