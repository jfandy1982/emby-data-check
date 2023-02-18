import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Data } from '@angular/router';
import { ServerDto, ServerDeleteDto } from '../server.model';
import { ServersService } from '../servers.service';

@Component({
  selector: 'emby-data-check-server-detail',
  templateUrl: './server-detail.component.html',
  styleUrls: ['./server-detail.component.css'],
})
export class ServerDetailComponent implements OnInit {
  server!: ServerDto;
  isActiveServer = false;

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.data.subscribe((routerData: Data) => {
      this.server = routerData['server'];
    });
  }

  onDeleteServer() {
    this.serversService.deleteServer(new ServerDeleteDto(this.server.serverId));
  }

  onActivateServer() {
    this.serversService.activateServer(this.server);
    this.isActiveServer = true;
  }

  onDeactivateServer() {
    this.serversService.deactivateServer(this.server);
    this.isActiveServer = false;
  }
}
