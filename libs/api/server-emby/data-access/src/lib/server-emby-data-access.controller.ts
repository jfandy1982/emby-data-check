import { Controller } from '@nestjs/common';
import { ServerEmbyDataAccessService } from './server-emby-data-access.service';

@Controller('server-emby-data-access')
export class ServerEmbyDataAccessController {
  constructor(private serverEmbyDataAccessService: ServerEmbyDataAccessService) {}
}
