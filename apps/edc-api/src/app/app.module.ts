import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TypeOrmConfigService } from './configuration/typeorm.service';
import databaseConfig from './configuration/database.config';

import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';

import { ServerModule } from './server/server.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      expandVariables: true,
      isGlobal: true,
      load: [databaseConfig],
    }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    ServerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
