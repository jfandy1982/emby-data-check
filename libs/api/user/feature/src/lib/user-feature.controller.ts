import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserFeatureService } from './user-feature.service';

@ApiTags('users')
@Controller('users')
export class UserFeatureController {
  constructor(private userFeatureService: UserFeatureService) {}
}
