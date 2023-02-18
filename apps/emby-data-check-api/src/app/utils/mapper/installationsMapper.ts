import { InstallationEntity } from '../../installation/models/installation.entity';
import { InstallationDto } from '../../installation/models/installation.interface';
import { EmbyUsersMapper } from './emby-usersMapper';
import { ServersMapper } from './serversMapper';

export class InstallationsMapper {
  public static mapInstallationEntitiesToDtos(installationEntities: InstallationEntity[]): InstallationDto[] {
    const installationsFound: InstallationDto[] = [];

    if (installationEntities && installationEntities.length > 0) {
      installationEntities.forEach(function (v) {
        installationsFound.push(InstallationsMapper.mapInstallationEntityToDto(v));
      });
    }

    return installationsFound;
  }

  public static mapInstallationEntityToDto(installationEntity: InstallationEntity): InstallationDto {
    if (installationEntity.embyUsers && installationEntity.embyUsers.length > 0) {
      return {
        id: installationEntity.id,
        embyServerId: installationEntity.embyServerId,
        isActive: installationEntity.isActive,
        server: ServersMapper.mapServerEntityToDto(installationEntity.server),
        embyUsers: EmbyUsersMapper.mapEmbyUserEntitiesToDtos(installationEntity.embyUsers),
      };
    } else {
      return {
        id: installationEntity.id,
        embyServerId: installationEntity.embyServerId,
        isActive: installationEntity.isActive,
        server: ServersMapper.mapServerEntityToDto(installationEntity.server),
      };
    }
  }
}
