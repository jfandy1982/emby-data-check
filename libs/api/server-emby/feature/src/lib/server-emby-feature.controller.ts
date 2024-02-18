import { Controller } from '@nestjs/common';
import { ServerEmbyFeatureService } from './server-emby-feature.service';

@Controller('server-emby-feature')
export class ServerEmbyFeatureController {
  constructor(private serverEmbyFeatureService: ServerEmbyFeatureService) {}
}
