import { Controller } from '@nestjs/common';
import { UserFeatureService } from './user-feature.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UserFeatureController {
  constructor(private userFeatureService: UserFeatureService) {}
}
