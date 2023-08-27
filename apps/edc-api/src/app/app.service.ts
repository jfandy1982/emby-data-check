import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHelloFromApi(): { message: string } {
    return { message: 'This is the API for the Emby Data Check project!' };
  }
}
