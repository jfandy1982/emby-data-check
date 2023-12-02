import { Controller } from '@nestjs/common';
import { ServerEdcDataAccessService } from './server-edc-data-access.service';

@Controller('server-edc-data-access')
export class ServerEdcDataAccessController {
  constructor(private serverEdcDataAccessService: ServerEdcDataAccessService) {}
}
