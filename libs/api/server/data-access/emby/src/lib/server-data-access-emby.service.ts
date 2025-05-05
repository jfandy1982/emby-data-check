import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { EmbyPublicSystemInfoInterface } from '@edc/shared/model/emby';
import { map, Observable } from 'rxjs';

@Injectable()
export class ServerDataAccessEmbyService {
  constructor(private readonly httpService: HttpService) {}

  getPublicSystemInfo(embyServerHost: string, embyServerPort: number): Observable<EmbyPublicSystemInfoInterface> {
    const url = `http://${embyServerHost}:${embyServerPort}/emby/System/Info/Public`;
    return this.httpService.get<EmbyPublicSystemInfoInterface>(url).pipe(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      map((response: any) => response.data),
    );
  }
}
