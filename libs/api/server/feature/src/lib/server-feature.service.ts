import { ServerEdcDataAccessService } from '@edc/api/server/data-access/edc';
import { ServerEmbyDataAccessService } from '@edc/api/server/data-access/emby';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ServerFeatureService {
  constructor(
    private serverEdcDataAccessService: ServerEdcDataAccessService,
    private serverEmbyDataAccessService: ServerEmbyDataAccessService,
  ) {}
}
