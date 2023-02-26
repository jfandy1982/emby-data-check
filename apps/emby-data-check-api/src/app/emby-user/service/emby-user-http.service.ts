import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom, map } from 'rxjs';
import { ServerDto } from '../../server/models/server.interface';
import { UserDto } from '../../user/models/user.interface';
import { EmbyUserInfoDto, PublicUserInfoEmbyDto } from '../models/emby-user-emby.interface';

@Injectable()
export class EmbyUserHttpService {
  constructor(private readonly httpService: HttpService) {}
  async getEmbyUserDetails(user: UserDto, server: ServerDto): Promise<EmbyUserInfoDto> {
    const url = `http://${server.ipAddress}:${server.port}/emby/Users?api_key=${server.apiKey}`;
    const embyUserDetail = new EmbyUserInfoDto();

    await firstValueFrom(
      this.httpService.get<PublicUserInfoEmbyDto[]>(url).pipe(
        map((userDetails) => {
          const filteredUserDetail = userDetails.data.filter((userDetail) => userDetail.Name === user.username);

          if (filteredUserDetail && filteredUserDetail.length === 1) {
            embyUserDetail.embyuserid = filteredUserDetail[0].Id;
            embyUserDetail.serverid = filteredUserDetail[0].ServerId;
            embyUserDetail.username = filteredUserDetail[0].Name;
          } else {
            throw new Error('Error in Filter - EmbyUserHttpService');
          }
        }),
        catchError((error: AxiosError) => {
          throw new Error(error.toString());
        })
      )
    );
    return embyUserDetail;
  }
}
