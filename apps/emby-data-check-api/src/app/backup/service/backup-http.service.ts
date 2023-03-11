import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom, map } from 'rxjs';
import { EmbyUserInfoDto } from '../../emby-user/models/emby-user-emby.interface';
import { EmbyUserCreateDto, EmbyUserDto, EmbyUserUpdateDto } from '../../emby-user/models/emby-user.interface';
import { InstallationInfoDto } from '../../installation/models/installation-emby.interface';
import { InstallationCreateDto, InstallationDto, InstallationUpdateDto } from '../../installation/models/installation.interface';
import { ServerDto } from '../../server/models/server.interface';
import { UserDto } from '../../user/models/user.interface';

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

  async getAllInstallations(): Promise<InstallationDto[]> {
    const url = `http://localhost:3000/api/installations/db/`;
    let installations: InstallationDto[] = [];

    await firstValueFrom(
      this.httpService.get<InstallationDto[]>(url).pipe(
        map((installationDetails) => {
          installations = installationDetails.data;
        }),
        catchError((error: AxiosError) => {
          throw new Error(error.toString());
        })
      )
    );
    return installations;
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

  async getUserDetails(userId: string): Promise<UserDto> {
    const url = `http://localhost:3000/api/users/db/${userId}`;
    let user = new UserDto();

    await firstValueFrom(
      this.httpService.get<UserDto>(url).pipe(
        map((userDetails) => {
          user = userDetails.data;
        }),
        catchError((error: AxiosError) => {
          throw new Error(error.toString());
        })
      )
    );
    return user;
  }

  async getEmbyUserInfoForUser(user: UserDto, server: ServerDto): Promise<EmbyUserInfoDto> {
    const url = `http://localhost:3000/api/embyusers/emby/${user.id}/${server.id}`;
    let embyUserInfo = new EmbyUserInfoDto();

    await firstValueFrom(
      this.httpService.get<EmbyUserInfoDto>(url).pipe(
        map((embyUserInfoResult) => {
          embyUserInfo = embyUserInfoResult.data;
        }),
        catchError((error: AxiosError) => {
          throw new Error(error.toString());
        })
      )
    );
    return embyUserInfo;
  }

  async backupEmbyUser(newEmbyUser: EmbyUserCreateDto): Promise<EmbyUserDto> {
    const url = `http://localhost:3000/api/embyusers/db/`;
    let embyUser = new EmbyUserDto();

    await firstValueFrom(
      this.httpService.post<EmbyUserDto>(url, newEmbyUser).pipe(
        map((embyUserDetails) => {
          embyUser = embyUserDetails.data;
        }),
        catchError((error: AxiosError) => {
          throw new Error(error.toString());
        })
      )
    );
    return embyUser;
  }

  async updateEmbyUser(existingEmbyUser: EmbyUserUpdateDto): Promise<EmbyUserDto> {
    const url = `http://localhost:3000/api/embyusers/db/${existingEmbyUser.id}`;
    let embyUser = new EmbyUserDto();

    await firstValueFrom(
      this.httpService.put<EmbyUserDto>(url, existingEmbyUser).pipe(
        map((embyUserDetails) => {
          embyUser = embyUserDetails.data;
        }),
        catchError((error: AxiosError) => {
          throw new Error(error.toString());
        })
      )
    );
    return embyUser;
  }
}
