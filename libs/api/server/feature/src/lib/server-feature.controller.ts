import { Controller } from '@nestjs/common';
import { ServerFeatureService } from './server-feature.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('servers')
@Controller('servers')
export class ServerFeatureController {
  constructor(private serverFeatureService: ServerFeatureService) {}
}
