import { Controller, Get } from '@nestjs/common';
import { ServerEmbyFeatureService } from './server-emby-feature.service';

@Controller('server-emby-feature')
export class ServerEmbyFeatureController {
  constructor(private readonly serverEmbyFeatureService: ServerEmbyFeatureService) {}

  @Get('watched')
  async getWatchedItems() {
    return ''; //this.serverEmbyFeatureService.findAll();
  }
}
