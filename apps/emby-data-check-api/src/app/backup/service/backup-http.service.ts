import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom, map } from 'rxjs';
import { InstallationInfoDto } from '../../installation/models/installation-emby.interface';
import { InstallationCreateDto, InstallationDto, InstallationUpdateDto } from '../../installation/models/installation.interface';
import { ServerDto } from '../../server/models/server.interface';

@Injectable()
export class BackupHttpService {
  constructor(private readonly httpService: HttpService) {}

  async getServerDetails(serverId: string): Promise<ServerDto> {
    const url = `http://localhost:3000/api/servers/db/${serverId}`;
    let server = new ServerDto();

    await firstValueFrom(
      this.httpService.get<ServerDto>(url).pipe(
        map((serverDetails) => {
          server = serverDetails.data;
        }),
        catchError((error: AxiosError) => {
          throw new Error(error.toString());
        })
      )
    );
    return server;
  }

  async getInstallationInfoForServer(server: ServerDto): Promise<InstallationInfoDto> {
    const url = `http://localhost:3000/api/installations/emby/${server.id}`;
    let installationInfo = new InstallationInfoDto();

    await firstValueFrom(
      this.httpService.get<InstallationInfoDto>(url).pipe(
        map((installationInfoResult) => {
          installationInfo = installationInfoResult.data;
        }),
        catchError((error: AxiosError) => {
          throw new Error(error.toString());
        })
      )
    );
    return installationInfo;
  }

  async backupInstallation(newInstallation: InstallationCreateDto): Promise<InstallationDto> {
    const url = `http://localhost:3000/api/installations/db/`;
    let installation = new InstallationDto();

    await firstValueFrom(
      this.httpService.post<InstallationDto>(url, newInstallation).pipe(
        map((installationDetails) => {
          installation = installationDetails.data;
        }),
        catchError((error: AxiosError) => {
          throw new Error(error.toString());
        })
      )
    );
    return installation;
  }

  async updateInstallation(existingInstallation: InstallationUpdateDto): Promise<InstallationDto> {
    const url = `http://localhost:3000/api/installations/db/${existingInstallation.id}`;
    let installation = new InstallationDto();

    await firstValueFrom(
      this.httpService.put<InstallationDto>(url, existingInstallation).pipe(
        map((installationDetails) => {
          installation = installationDetails.data;
        }),
        catchError((error: AxiosError) => {
          throw new Error(error.toString());
        })
      )
    );
    return installation;
  }
}
