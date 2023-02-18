import { EmbyUserEntity } from '../../emby-user/models/emby-user.entity';
import { EmbyUserDto } from '../../emby-user/models/emby-user.interface';
import { InstallationsMapper } from './installationsMapper';
import { UsersMapper } from './usersMapper';
import { WatchStatesMapper } from './watch-statesMapper';

export class EmbyUsersMapper {
  public static mapEmbyUserEntitiesToDtos(embyUserEntities: EmbyUserEntity[]): EmbyUserDto[] {
    const embyUsersFound: EmbyUserDto[] = [];

    if (embyUserEntities && embyUserEntities.length > 0) {
      embyUserEntities.forEach(function (v) {
        embyUsersFound.push(EmbyUsersMapper.mapEmbyUserEntityToDto(v));
      });
    }

    return embyUsersFound;
  }

  public static mapEmbyUserEntityToDto(embyUserEntity: EmbyUserEntity): EmbyUserDto {
    if (embyUserEntity.watchStates && embyUserEntity.watchStates.length > 0) {
      return {
        id: embyUserEntity.id,
        embyUserId: embyUserEntity.embyUserId,
        isActive: embyUserEntity.isActive,
        user: UsersMapper.mapUserEntityToDto(embyUserEntity.user),
        installation: InstallationsMapper.mapInstallationEntityToDto(embyUserEntity.installation),
        watchStates: WatchStatesMapper.mapWatchStateEntitiesToDtos(embyUserEntity.watchStates),
      };
    } else {
      return {
        id: embyUserEntity.id,
        embyUserId: embyUserEntity.embyUserId,
        isActive: embyUserEntity.isActive,
        user: UsersMapper.mapUserEntityToDto(embyUserEntity.user),
        installation: InstallationsMapper.mapInstallationEntityToDto(embyUserEntity.installation),
      };
    }
  }
}
