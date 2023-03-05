import { Controller, Param, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { InstallationCreateDto, InstallationUpdateDto } from '../../installation/models/installation.interface';
import { ServerDto } from '../../server/models/server.interface';
import { BackupHttpService } from '../service/backup-http.service';

@ApiTags('backups')
@Controller('backups')
export class BackupController {
  constructor(private backupHttpService: BackupHttpService) {}

  @ApiBearerAuth()
  @Post('server/:id')
  async takeBackup(@Param('id') id: string): Promise<ServerDto> {
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
}
