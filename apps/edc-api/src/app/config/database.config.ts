import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  type: 'postgres',
  schema: process.env.DATABASE_SCHEMA || 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [`${__dirname}/../../../../../libs/shared-interfaces/db-interface/src/**/*.entity{.ts,.js}`],
  synchronize: process.env.NODE_ENV === 'development',
  logging: process.env.NODE_ENV === 'development',
  migrations: [`${__dirname}/../../../db/migrations/*{.ts,.js}`],
  migrationsTableName: process.env.MIGRATIONS_TABLE_NAME,
}));
