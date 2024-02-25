import { UserEdcDataAccessService } from '@edc/api/user-edc/data-access';
import { UserEmbyDataAccessService } from '@edc/api/user-emby/data-access';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserFeatureService {
  constructor(
    private userEdcDataAccessService: UserEdcDataAccessService,
    private userEmbyDataAccessService: UserEmbyDataAccessService,
  ) {}
}
