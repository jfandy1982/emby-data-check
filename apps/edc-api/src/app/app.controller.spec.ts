import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getHelloFromApi', () => {
    it('should return a Greeting', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getHelloFromApi()).toEqual({ message: 'This is the API for the Emby Data Check project!' });
    });
  });
});
