import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ServerDto } from './server.model';
import { ServersService } from './servers.service';

@Injectable({
  providedIn: 'root',
})
export class ServerResolver implements Resolve<ServerDto> {
  constructor(private serversService: ServersService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ServerDto | Observable<ServerDto> | Promise<ServerDto> {
    return this.serversService.getServer(route.params['serverid']);
  }
}
