import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from '../service/app.service';

@ApiTags('Emby')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHelloFromApi() {
    return this.appService.getHelloFromApi();
  }
}
