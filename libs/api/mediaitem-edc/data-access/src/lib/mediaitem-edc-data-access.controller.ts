import { Controller } from '@nestjs/common';
import { MediaitemEdcDataAccessService } from './mediaitem-edc-data-access.service';

@Controller('mediaitem-edc-data-access')
export class MediaitemEdcDataAccessController {
  constructor(private mediaitemEdcDataAccessService: MediaitemEdcDataAccessService) {}
}
