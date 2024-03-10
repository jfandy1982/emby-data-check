import { UserRole } from '@edc/shared-interfaces/enum';
import { MediaItemDto } from '../dtos/mediaitem.dto';

export interface UserWatchedInterface {
  id: string;
  isWatched: boolean;
  lastWatchedAt: Date;
  mediaitem: MediaItemDto;
}

export interface UserInterface {
  id: string;
  userIdFromEmbyDb: string;
  userid: string;
  username: string;
  password: string;
  userrole: UserRole;
  watched: UserWatchedInterface[];
}
