import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServersService } from '../servers/servers.service';

@Component({
  selector: 'emby-data-check-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private serversChangedSubscription!: Subscription;
  disabledButton = true;

  constructor(private serversService: ServersService) {}

  ngOnInit(): void {
    this.disabledButton = this.hasServers();
    this.serversChangedSubscription = this.serversService.serversChanged.subscribe(() => {
      this.disabledButton = this.hasServers();
    });
  }

  ngOnDestroy(): void {
    this.serversChangedSubscription.unsubscribe();
  }

  hasServers(): boolean {
    return this.serversService.getServers().length === 0 ? true : false;
  }
}
