import { Controller } from '@nestjs/common';
import { ServerFeatureService } from './server-feature.service';

@Controller('server-feature')
export class ServerFeatureController {
  constructor(private serverFeatureService: ServerFeatureService) {}
}
