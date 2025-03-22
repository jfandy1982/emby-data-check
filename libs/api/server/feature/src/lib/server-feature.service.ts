import { Injectable } from '@nestjs/common';
import { ServerDataAccessEmbyService } from '@edc/api/server/data-access/emby';
import { Observable } from 'rxjs';
import { EmbyPublicSystemInfoInterface } from '@edc/shared/model/emby';

@Injectable()
export class ServerFeatureService {
  constructor(private readonly serverEmbyDataAccessService: ServerDataAccessEmbyService) {}

  getPublicSystemInfo(embyServerHost: string, embyServerPort: number): Observable<EmbyPublicSystemInfoInterface> {
    return this.serverEmbyDataAccessService.getPublicSystemInfo(embyServerHost, embyServerPort);
  }
}
