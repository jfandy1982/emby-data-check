import { Controller } from '@nestjs/common';
import { MediaitemEmbyFeatureService } from './mediaitem-emby-feature.service';

@Controller('mediaitem-emby-feature')
export class MediaitemEmbyFeatureController {
  constructor(private mediaitemEmbyFeatureService: MediaitemEmbyFeatureService) {}
}
