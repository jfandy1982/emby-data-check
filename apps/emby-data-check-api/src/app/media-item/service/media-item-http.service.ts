import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { Server } from 'http';
import { catchError, firstValueFrom, map } from 'rxjs';
import { ServerDto } from '../../server/models/server.interface';
import { PublicItemsEmbyDto } from '../models/media-item-emby.interface';

@Injectable()
export class MediaItemHttpService {
  private readonly urlQueryParamIncludeItemTypes = 'Video%2CTag%2CMusicVideo%2CSeason%2CEpisode%2CSeries%2CMovie';
  private readonly urlQueryParamDefaultParams = 'Recursive=true&EnableImages=false';
  private readonly urlQueryParamFields =
    'Name%2CServerId%2CId%2CPath%2CTaglines%2CProviderIds%2CIsFolder%2CType%2CTagItems%2CSeriesName%2CSeriesId%2CSeasonId%2CTags%2CSeasonName%2CMediaType';

  constructor(private readonly httpService: HttpService) {}

  async findAllUsedMediaItemTypes(server: ServerDto): Promise<string[]> {
    const url = `http://${server.ipAddress}:${server.port}/emby/Items?${this.urlQueryParamDefaultParams}&api_key=${server.apiKey}&fields=Type`;
    const usedMediaItemTypes: string[] = [];

    await firstValueFrom(
      this.httpService.get<PublicItemsEmbyDto>(url).pipe(
        map((itemDetails) => {
          itemDetails.data.Items.forEach((foundItemDetail) => {
            if (usedMediaItemTypes.indexOf(foundItemDetail.Type) < 0) {
              usedMediaItemTypes.push(foundItemDetail.Type);
            }
          });
        }),
        catchError((error: AxiosError) => {
          throw new Error(error.toString());
        })
      )
    );
    return usedMediaItemTypes;
  }

  async findAllMediaItemsOnInstallation(server: ServerDto, isMissing: boolean): Promise<PublicItemsEmbyDto> {
    const url = `http://${server.ipAddress}:${server.port}/emby/Items?${this.urlQueryParamDefaultParams}&api_key=${server.apiKey}&IncludeItemTypes=${this.urlQueryParamIncludeItemTypes}&IsMissing=${isMissing}&fields=${this.urlQueryParamFields}`;
    const foundMediaItems = new PublicItemsEmbyDto();

    await firstValueFrom(
      this.httpService.get<PublicItemsEmbyDto>(url).pipe(
        map((itemDetails) => {
          foundMediaItems.Items = [];
          itemDetails.data.Items.forEach((foundItemDetail) => {
            foundMediaItems.Items.push(foundItemDetail);
          });
        }),
        catchError((error: AxiosError) => {
          throw new Error(error.toString());
        })
      )
    );

    return foundMediaItems;
  }
}
