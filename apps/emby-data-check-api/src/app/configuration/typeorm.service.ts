import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import * as path from 'path';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _connectionName?: string
  ): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    return {
      autoLoadEntities: true,
      database: this.configService.get<string>('database.name'),
      entities: [path.join(__dirname, '../') + '/**/*.entity.ts'],
      host: this.configService.get<string>('database.host'),
      migrations: [path.join(__dirname, '../') + 'db/migrations/*.ts'],
      password: this.configService.get<string>('database.password'),
      port: this.configService.get<number>('database.port'),
      synchronize: this.configService.get<boolean>('database.synchronize'),
      type: 'postgres',
      username: this.configService.get<string>('database.user'),
    };
  }
}
