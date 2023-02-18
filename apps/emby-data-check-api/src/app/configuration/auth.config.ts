import { registerAs } from '@nestjs/config';

export default registerAs('auth', () => ({
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
}));
