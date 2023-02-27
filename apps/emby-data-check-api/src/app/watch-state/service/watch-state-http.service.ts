import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom, map } from 'rxjs';
import { EmbyUserDto } from '../../emby-user/models/emby-user.interface';
import { ServerDto } from '../../server/models/server.interface';
import { PublicWatchStatesEmbyDto } from '../models/watch-state-emby.interface';

@Injectable()
export class WatchStateHttpService {
  private readonly urlQueryParamDefaultParams = 'Recursive=true&EnableImages=false';

  constructor(private readonly httpService: HttpService) {}

  async findAllWatchStatesForUser(server: ServerDto, embyUser: EmbyUserDto): Promise<PublicWatchStatesEmbyDto> {
    const url = `http://${server.ipAddress}:${server.port}/emby/Items?${this.urlQueryParamDefaultParams}&api_key=${server.apiKey}&UserId=${embyUser.embyUserId}&IsPlayed=true`;
    const foundWatchStates = new PublicWatchStatesEmbyDto();

    await firstValueFrom(
      this.httpService.get<PublicWatchStatesEmbyDto>(url).pipe(
        map((itemDetails) => {
          foundWatchStates.Items = [];
          itemDetails.data.Items.forEach((foundItemDetail) => {
            foundWatchStates.Items.push(foundItemDetail);
          });
        }),
        catchError((error: AxiosError) => {
          throw new Error(error.toString());
        })
      )
    );
    console.log(foundWatchStates.Items.length);
    return foundWatchStates;
  }
}
