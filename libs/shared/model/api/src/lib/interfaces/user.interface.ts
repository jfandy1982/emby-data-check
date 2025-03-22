import { UserRole } from '@edc/shared-interfaces/enum';
import { MediaItemDto } from '../dtos/mediaitem.dto';

export interface UserWatchedInterface {
  id: string;
  isWatched: boolean;
  lastWatchedAt: Date;
  mediaItem: MediaItemDto;
}

export interface UserInterface {
  id: string;
  userIdFromEmbyDb: string;
  userId: string;
  userName: string;
  password: string;
  userRole: UserRole;
  watchedItems: UserWatchedInterface[];
}
