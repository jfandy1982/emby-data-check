import { UserRole } from '@edc/shared-interfaces/enum';

export interface UserInterface {
  id: string;
  userIdFromEmbyDb: string;
  userid: string;
  username: string;
  password: string;
  userrole: UserRole;
}
