import { Controller } from '@nestjs/common';
import { UserEdcFeatureService } from './user-edc-feature.service';

@Controller('user-edc-feature')
export class UserEdcFeatureController {
  constructor(private userEdcFeatureService: UserEdcFeatureService) {}
}
