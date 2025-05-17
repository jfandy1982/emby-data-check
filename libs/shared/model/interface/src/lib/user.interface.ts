import { UserRole } from '@edc/shared/model/enum';
import { MediaItemInterface } from './mediaitem.interface';

export interface UserWatchedInterface {
  id: string;
  isWatched: boolean;
  lastWatchedAt: Date;
  mediaItem: MediaItemInterface;
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
