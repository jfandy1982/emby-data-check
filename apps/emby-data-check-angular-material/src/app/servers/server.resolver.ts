import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ServerDto } from './server.model';
import { ServersService } from './servers.service';

@Injectable({
  providedIn: 'root',
})
export class ServerResolver implements Resolve<ServerDto> {
  constructor(private serversService: ServersService) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ServerDto | Observable<ServerDto> | Promise<ServerDto> {
    return this.serversService.getServer(route.params['serverid']);
  }
}
