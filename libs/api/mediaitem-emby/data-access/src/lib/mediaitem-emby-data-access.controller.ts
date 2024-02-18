import { Controller } from '@nestjs/common';
import { MediaitemEmbyDataAccessService } from './mediaitem-emby-data-access.service';

@Controller('mediaitem-emby-data-access')
export class MediaitemEmbyDataAccessController {
  constructor(private mediaitemEmbyDataAccessService: MediaitemEmbyDataAccessService) {}
}
