import { Controller, Get } from '@nestjs/common';
import { HealthCheck, HealthCheckService, TypeOrmHealthIndicator } from '@nestjs/terminus';

@Controller('healthcheck-feature')
export class HealthcheckFeatureController {
  constructor(
    private health: HealthCheckService,
    private db: TypeOrmHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  healthcheck() {
    return this.health.check([() => this.db.pingCheck('database')]);
  }
}
