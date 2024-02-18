import { Controller } from '@nestjs/common';
import { UserEmbyFeatureService } from './user-emby-feature.service';

@Controller('user-emby-feature')
export class UserEmbyFeatureController {
  constructor(private userEmbyFeatureService: UserEmbyFeatureService) {}
}
