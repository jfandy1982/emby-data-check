import { Controller, Param, Post, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { EmbyUserCreateDto, EmbyUserUpdateDto } from '../../emby-user/models/emby-user.interface';
import { InstallationCreateDto, InstallationDto, InstallationUpdateDto } from '../../installation/models/installation.interface';
import { ServerDto } from '../../server/models/server.interface';
import { UserDto } from '../../user/models/user.interface';
import { BackupHttpService } from '../service/backup-http.service';

@ApiTags('backups')
@Controller('backups')
export class BackupController {
  constructor(private backupHttpService: BackupHttpService) {}

  @ApiBearerAuth()
  @Post('server/:id')
  async takeBackupServer(@Param('id') id: string): Promise<ServerDto> {
    const foundServer = await this.backupHttpService.getServerDetails(id);
    const foundInstallationInfo = await this.backupHttpService.getInstallationInfoForServer(foundServer);

    const activeInstallations = foundServer.installations.filter((knownInstallation) => {
      // a different Emby Server ID is marked as active -> requires deactivation & recreation
      return foundInstallationInfo.installationid !== knownInstallation.embyServerId && knownInstallation.isActive === true;
    });

    if (activeInstallations.length > 0) {
      activeInstallations.forEach((activeInstallation) => {
        const updateInstallation: InstallationUpdateDto = {
          id: activeInstallation.id,
          isActive: false,
        };
        this.backupHttpService.updateInstallation(updateInstallation);
      });
    }

    const toBeActiveInstallation = foundServer.installations.filter((knownInstallation) => {
      return knownInstallation.embyServerId === foundInstallationInfo.installationid;
    });

    if (toBeActiveInstallation.length === 0) {
      // The Emby Server GUID is not recorded yet -> do it as active record
      const newInstallation: InstallationCreateDto = {
        embyServerId: foundInstallationInfo.installationid,
        isActive: true,
        server: foundServer,
      };
      this.backupHttpService.backupInstallation(newInstallation);
    } else if (activeInstallations.length > 0) {
      // The Emby Server GUID is recorded already and deactivated before -> reactivate it now
      const updateInstallation: InstallationUpdateDto = {
        id: toBeActiveInstallation[0].id,
        isActive: true,
      };
      this.backupHttpService.updateInstallation(updateInstallation);
    }
    return this.backupHttpService.getServerDetails(id);
  }

  @ApiBearerAuth()
  @Post('user/:id')
  async takeBackupUser(@Param('id') id: string, @Query('serverid') serverid: string): Promise<UserDto> {
    const foundUser = await this.backupHttpService.getUserDetails(id);
    const foundServer = await this.backupHttpService.getServerDetails(serverid);
    let activeInstallations: InstallationDto[] = [];

    if (foundServer.installations.length > 0) {
      activeInstallations = foundServer.installations.filter((knownInstallation) => {
        return knownInstallation.isActive === true;
      });
    }

    const foundEmbyUserInfo = await this.backupHttpService.getEmbyUserInfoForUser(foundUser, foundServer);

    const activeEmbyUsers = foundUser.embyUsers.filter((knownEmbyUser) => {
      // a different Emby User ID is marked as active -> requires deactivation & recreation
      return foundEmbyUserInfo.embyuserid !== knownEmbyUser.embyUserId && knownEmbyUser.isActive === true;
    });

    if (activeEmbyUsers.length > 0) {
      activeEmbyUsers.forEach((activeEmbyUser) => {
        const updateEmbyUser: EmbyUserUpdateDto = {
          id: activeEmbyUser.id,
          isActive: false,
        };
        this.backupHttpService.updateEmbyUser(updateEmbyUser);
      });
    }

    const toBeActiveEmbyUser = foundUser.embyUsers.filter((knownEmbyUser) => {
      return knownEmbyUser.embyUserId === foundEmbyUserInfo.embyuserid;
    });

    if (toBeActiveEmbyUser.length === 0) {
      // The Emby User GUID is not recorded yet -> do it as active record
      const newEmbyUser: EmbyUserCreateDto = {
        embyUserId: foundEmbyUserInfo.embyuserid,
        isActive: true,
        user: foundUser,
        installation: activeInstallations[0],
      };
      this.backupHttpService.backupEmbyUser(newEmbyUser);
    } else if (activeEmbyUsers.length > 0) {
      // The Emby User GUID is recorded already and deactivated before -> reactivate it now
      const updateEmbyUser: EmbyUserUpdateDto = {
        id: toBeActiveEmbyUser[0].id,
        isActive: true,
      };
      this.backupHttpService.updateEmbyUser(updateEmbyUser);
    }
    return this.backupHttpService.getUserDetails(id);
  }
}
