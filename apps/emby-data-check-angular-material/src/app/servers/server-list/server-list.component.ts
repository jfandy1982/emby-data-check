import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServerDto } from '../server.model';
import { ServersService } from '../servers.service';

@Component({
  selector: 'edc-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css'],
})
export class ServerListComponent implements OnInit, OnDestroy {
  servers!: ServerDto[];
  private serversChangedSubscription!: Subscription;

  constructor(private serversService: ServersService) {}

  ngOnInit(): void {
    this.getServers();
    this.serversChangedSubscription = this.serversService.serversChanged.subscribe(() => {
      this.getServers();
    });
  }

  ngOnDestroy(): void {
    this.serversChangedSubscription.unsubscribe();
  }

  private getServers() {
    this.servers = this.serversService.getServers();
  }
}
