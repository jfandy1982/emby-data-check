import { HealthcheckFeatureModule } from '@edc/api/healthcheck/feature';
import { MediaitemFeatureModule } from '@edc/api/mediaitem/feature';
import { ServerFeatureModule } from '@edc/api/server/feature';
import { UserFeatureModule } from '@edc/api/user/feature';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppConfig, DatabaseConfig } from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      expandVariables: true,
      load: [AppConfig, DatabaseConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        ...configService.get('database'),
      }),
      inject: [ConfigService],
    }),
    HealthcheckFeatureModule,
    MediaitemFeatureModule,
    ServerFeatureModule,
    UserFeatureModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
