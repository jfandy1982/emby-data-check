import { registerAs } from '@nestjs/config';

export default registerAs('dbConfigEnvVars', () => ({
  database_host: process.env.DATABASE_HOST,
  database_port: process.env.DATABASE_PORT || 5432,
  database_password: process.env.DATABASE_PASSWORD,
  database_username: process.env.DATABASE_USERNAME,
}));
