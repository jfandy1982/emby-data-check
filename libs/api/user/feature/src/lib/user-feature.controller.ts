import { Controller } from '@nestjs/common';
import { UserFeatureService } from './user-feature.service';

@Controller('user-feature')
export class UserFeatureController {
  constructor(private userFeatureService: UserFeatureService) {}
}
