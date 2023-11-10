import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { join } from 'path';
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
  entities: [join(__dirname + '../../../../' + '/libs/shared-interfaces/db-interface') + '/**/*.entity{.ts,.js}'],
  synchronize: configService.get<string>('tier') === 'development',
  logging: configService.get<string>('tier') === 'development',
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
  migrationsTableName: 'edc_migrations',
  migrationsTransactionMode: 'each',
};

export default new DataSource(dataSourceConfig);
