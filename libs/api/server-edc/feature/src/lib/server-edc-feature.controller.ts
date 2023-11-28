import { Controller } from '@nestjs/common';
import { ServerEdcFeatureService } from './server-edc-feature.service';

@Controller('server-edc-feature')
export class ServerEdcFeatureController {
  constructor(private serverEdcFeatureService: ServerEdcFeatureService) {}
}
