import { Controller } from '@nestjs/common';
import { HealthcheckFeatureService } from './healthcheck-feature.service';

@Controller('healthcheck-feature')
export class HealthcheckFeatureController {
  constructor(private healthcheckFeatureService: HealthcheckFeatureService) {}
}
