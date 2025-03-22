import { Controller, Get } from '@nestjs/common';
import { ServerFeatureService } from './server-feature.service';
import { environment } from '@edc/shared/environment';

@Controller('servers')
export class ServerFeatureController {
  constructor(private readonly serverFeatureService: ServerFeatureService) {}

  @Get('publicSystemInfo')
  getPublicSystemInfo() {
    this.serverFeatureService
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      .getPublicSystemInfo(environment.embyConfigEnvVars!.emby_server_host, environment.embyConfigEnvVars!.emby_server_port)
      .subscribe((data) => {
        return data;
      });
  }
}
