import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ServerEmbyFeatureService {
  constructor(private readonly httpService: HttpService) {}

  // async findAll(): Promise<EmbyItemsDto> {
  //   const url =
  //     'http://192.168.173.2:8096/emby/Items?Recursive=true&IsPlayed=true&UserId=bb68afe509d043dbb44829797309dd82&api_key=292150045b894537bf0b61d0ce9c1a70';

  //   await firstValueFrom(this.httpService.get<EmbyItemsDto>(url).pipe(
  //       map((resultItem) =>

  //       )
  //   ));

  //   return result;
  // }
}
