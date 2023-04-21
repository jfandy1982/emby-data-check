import { Component, OnDestroy, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'edc-ng-server-create',
  templateUrl: './server-create.component.html',
  styleUrls: ['./server-create.component.scss'],
})
export class ServerCreateComponent implements OnInit, OnDestroy {
  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  onCreateServer() {
    return;
  }
}
