import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  port: process.env.API_PORT || 3000,
  tier: process.env.NODE_ENV,
}));
