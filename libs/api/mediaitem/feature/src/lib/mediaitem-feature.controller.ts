import { Controller } from '@nestjs/common';
import { MediaitemFeatureService } from './mediaitem-feature.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('mediaitems')
@Controller('mediaitems')
export class MediaitemFeatureController {
  constructor(private mediaitemFeatureService: MediaitemFeatureService) {}
}
