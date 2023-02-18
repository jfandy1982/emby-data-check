import { UserEntity } from '../../user/models/user.entity';
import { UserDto } from '../../user/models/user.interface';

import { EmbyUsersMapper } from './emby-usersMapper';

export class UsersMapper {
  public static mapUserEntitiesToDtos(userEntities: UserEntity[]): UserDto[] {
    const usersFound: UserDto[] = [];

    if (userEntities && userEntities.length > 0) {
      userEntities.forEach(function (v) {
        usersFound.push(UsersMapper.mapUserEntityToDto(v));
      });
    }

    return usersFound;
  }

  public static mapUserEntityToDto(userEntity: UserEntity): UserDto {
    if (userEntity.embyUsers && userEntity.embyUsers.length > 0) {
      return {
        id: userEntity.id,
        username: userEntity.username,
        name: userEntity.name,
        role: userEntity.role,
        password: userEntity.password,
        embyUsers: EmbyUsersMapper.mapEmbyUserEntitiesToDtos(userEntity.embyUsers),
      };
    } else {
      return {
        id: userEntity.id,
        username: userEntity.username,
        name: userEntity.name,
        role: userEntity.role,
        password: userEntity.password,
      };
    }
  }
}
