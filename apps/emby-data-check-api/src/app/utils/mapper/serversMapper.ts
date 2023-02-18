import { ServerEntity } from '../../server/models/server.entity';
import { ServerDto } from '../../server/models/server.interface';

import { InstallationsMapper } from './installationsMapper';

export class ServersMapper {
  public static mapServerEntitiesToDtos(serverEntities: ServerEntity[]): ServerDto[] {
    const serversFound: ServerDto[] = [];

    if (serverEntities && serverEntities.length > 0) {
      serverEntities.forEach(function (v) {
        serversFound.push(ServersMapper.mapServerEntityToDto(v));
      });
    }

    return serversFound;
  }

  public static mapServerEntityToDto(serverEntity: ServerEntity): ServerDto {
    if (serverEntity.installations && serverEntity.installations.length > 0) {
      return {
        id: serverEntity.id,
        apiKey: serverEntity.apiKey,
        description: serverEntity.description,
        servername: serverEntity.servername,
        ipAddress: serverEntity.ipAddress,
        port: serverEntity.port,
        installations: InstallationsMapper.mapInstallationEntitiesToDtos(serverEntity.installations),
      };
    } else {
      return {
        id: serverEntity.id,
        apiKey: serverEntity.apiKey,
        description: serverEntity.description,
        servername: serverEntity.servername,
        ipAddress: serverEntity.ipAddress,
        port: serverEntity.port,
      };
    }
  }
}
