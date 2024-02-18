import { Controller } from '@nestjs/common';
import { MediaitemEdcFeatureService } from './mediaitem-edc-feature.service';

@Controller('mediaitem-edc-feature')
export class MediaitemEdcFeatureController {
  constructor(private mediaitemEdcFeatureService: MediaitemEdcFeatureService) {}
}
