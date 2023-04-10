import { Component, OnDestroy, OnInit } from '@angular/core';
import { Server } from '@shared-interfaces/edc';
import { ServersService } from './servers.service';

@Component({
  selector: 'edc-ng-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent implements OnInit, OnDestroy {
  loadedServers: Server[] = [];

  constructor(private readonly serversService: ServersService) {}
  ngOnDestroy(): void {
    return;
  }
  ngOnInit(): void {
    this.serversService.fetchServers().subscribe();
  }
}
