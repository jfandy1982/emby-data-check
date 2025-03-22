import { Controller } from '@nestjs/common';
import { MediaitemFeatureService } from './mediaitem-feature.service';

@Controller('mediaitem-feature')
export class MediaitemFeatureController {
  constructor(private mediaitemFeatureService: MediaitemFeatureService) {}
}
