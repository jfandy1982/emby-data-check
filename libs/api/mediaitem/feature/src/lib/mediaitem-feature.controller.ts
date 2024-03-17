import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MediaitemFeatureService } from './mediaitem-feature.service';

@ApiTags('mediaitems')
@Controller('mediaitems')
export class MediaitemFeatureController {
  constructor(private mediaitemFeatureService: MediaitemFeatureService) {}
}
