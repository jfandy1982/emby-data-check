import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { firstValueFrom, map, catchError } from 'rxjs';
import { ServerDto } from '../../server/models/server.interface';
import { InstallationInfoDto, PublicSystemInfoEmbyDto } from '../models/installation-emby.interface';

@Injectable()
export class InstallationHttpService {
  constructor(private readonly httpService: HttpService) {}
  async getInstallationDetails(server: ServerDto): Promise<InstallationInfoDto> {
    const url = `http://${server.ipAddress}:${server.port}/emby/System/Info/Public`;
    const installationDetail: InstallationInfoDto = null;

    await firstValueFrom(
      this.httpService.get<PublicSystemInfoEmbyDto>(url).pipe(
        map((serverDetails) => {
          installationDetail.installationid = serverDetails.data.Id;
          installationDetail.servername = serverDetails.data.ServerName;
        }),
        catchError((error: AxiosError) => {
          throw new Error(error.toString());
        })
      )
    );
    return installationDetail;
  }
}
