import { LoggerService } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { TerminusModule, TypeOrmHealthIndicator } from '@nestjs/terminus';
import { HealthCheckExecutor } from '@nestjs/terminus/dist/health-check/health-check-executor.service';
import { TERMINUS_LOGGER } from '@nestjs/terminus/dist/health-check/logger/logger.provider';
import { HealthcheckFeatureController } from './healthcheck-feature.controller';

const loggerMock: Partial<LoggerService> = {
  log: jest.fn(),
  error: jest.fn(),
  warn: jest.fn(),
  debug: jest.fn(),
};

const healthCheckExecutorMock: Partial<HealthCheckExecutor> = {
  execute: jest.fn(),
};

describe('Healthcheck Feature Controller', () => {
  let controller: HealthcheckFeatureController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [TerminusModule],
      providers: [
        HealthCheckExecutor,
        TypeOrmHealthIndicator,
        { provide: HealthCheckExecutor, useValue: healthCheckExecutorMock },
        { provide: TERMINUS_LOGGER, useValue: loggerMock },
      ],
      controllers: [HealthcheckFeatureController],
    }).compile();

    controller = module.get(HealthcheckFeatureController);
  });

  it('should be created', () => {
    expect(controller).toBeTruthy();
  });
});
