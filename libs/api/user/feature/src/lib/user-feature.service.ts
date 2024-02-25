import { UserEdcDataAccessService } from '@edc/api/user/data-access/edc';
import { UserEmbyDataAccessService } from '@edc/api/user/data-access/emby';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserFeatureService {
  constructor(
    private userEdcDataAccessService: UserEdcDataAccessService,
    private userEmbyDataAccessService: UserEmbyDataAccessService,
  ) {}
}
