import { IApiConfigEnvVars } from './api-config-env-vars.interface';
import { IDbConfigEnvVars } from './db-config-env-vars.interface';

export interface IEnvironment {
  apiConfigEnvVars?: IApiConfigEnvVars;
  database_name: string;
  dbConfigEnvVars?: IDbConfigEnvVars;
  landscape: string;
  production: boolean;
}
