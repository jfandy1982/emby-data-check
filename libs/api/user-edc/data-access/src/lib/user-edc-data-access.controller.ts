import { Controller } from '@nestjs/common';
import { UserEdcDataAccessService } from './user-edc-data-access.service';

@Controller('user-edc-data-access')
export class UserEdcDataAccessController {
  constructor(private userEdcDataAccessService: UserEdcDataAccessService) {}
}
