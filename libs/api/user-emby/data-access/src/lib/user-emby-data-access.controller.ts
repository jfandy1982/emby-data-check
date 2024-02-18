import { Controller } from '@nestjs/common';
import { UserEmbyDataAccessService } from './user-emby-data-access.service';

@Controller('user-emby-data-access')
export class UserEmbyDataAccessController {
  constructor(private userEmbyDataAccessService: UserEmbyDataAccessService) {}
}
