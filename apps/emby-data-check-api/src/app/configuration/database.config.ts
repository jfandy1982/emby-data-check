import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  name: process.env.DATABASE_NAME || 'edc',
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  synchronize: process.env.NODE_ENV === 'production' ? false : true,
}));
