import { registerAs } from '@nestjs/config';

export default registerAs('apiConfigEnvVars', () => ({
  api_port: process.env.API_PORT || 3000,
}));
