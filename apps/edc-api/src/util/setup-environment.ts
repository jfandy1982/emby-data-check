import { environment, IApiConfigEnvVars, IDbConfigEnvVars, IEnvironment } from '@edc/shared/environment';
import type { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export function setupEnvironment(nestApplication: INestApplication): void {
  environment.apiConfigEnvVars = nestApplication.get(ConfigService<IEnvironment, true>).get<IApiConfigEnvVars>('apiConfigEnvVars');
  environment.dbConfigEnvVars = nestApplication.get(ConfigService<IEnvironment, true>).get<IDbConfigEnvVars>('dbConfigEnvVars');
}
