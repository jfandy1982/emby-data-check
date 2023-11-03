import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

config();

const configService = new ConfigService();

const dataSourceConfig: PostgresConnectionOptions = {
  type: 'postgres',
  schema: configService.get<string>('DATABASE_SCHEMA'),
  host: configService.get<string>('DATABASE_HOST'),
  port: configService.get<number>('DATABASE_PORT'),
  username: configService.get<string>('DATABASE_USERNAME'),
  password: configService.get<string>('DATABASE_PASSWORD'),
  database: configService.get<string>('DATABASE_NAME'),
  entities: [`${__dirname}/../../../libs/shared-interfaces/db-interface/src/**/*.entity{.ts,.js}`],
  synchronize: configService.get<string>('tier') === 'development',
  logging: configService.get<string>('tier') === 'development',
  migrations: [`${__dirname}/migrations/*{.ts,.js}`],
  migrationsTableName: configService.get<string>('MIGRATIONS_TABLE_NAME'),
};

export default new DataSource(dataSourceConfig);
