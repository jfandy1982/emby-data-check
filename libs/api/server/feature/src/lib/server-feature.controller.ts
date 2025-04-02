import { Controller, Get } from '@nestjs/common';
import { ServerFeatureService } from './server-feature.service';
import { environment } from '@edc/shared/environment';
import { EmbyPublicSystemInfoInterface } from '@edc/shared/model/emby';
import { Observable, of } from 'rxjs';

@Controller('servers')
export class ServerFeatureController {
  constructor(private readonly serverFeatureService: ServerFeatureService) {}

  @Get('publicSystemInfo')
  getPublicSystemInfo(): Observable<EmbyPublicSystemInfoInterface> {
    return (
      this.serverFeatureService
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        .getPublicSystemInfo(environment.embyConfigEnvVars!.emby_server_host, environment.embyConfigEnvVars!.emby_server_port)
    );
  }
}
