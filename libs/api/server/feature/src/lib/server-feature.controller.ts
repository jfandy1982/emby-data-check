import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ServerFeatureService } from './server-feature.service';

@ApiTags('servers')
@Controller('servers')
export class ServerFeatureController {
  constructor(private serverFeatureService: ServerFeatureService) {}
}
