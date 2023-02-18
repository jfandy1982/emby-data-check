import { Component, OnDestroy, OnInit } from '@angular/core';
import { Validators, UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServerDto, ServerCreateDto } from '../server.model';
import { ServersService } from '../servers.service';

@Component({
  selector: 'edc-server-create',
  templateUrl: './server-create.component.html',
  styleUrls: ['./server-create.component.css'],
})
export class ServerCreateComponent implements OnInit, OnDestroy {
  form = this.fb.group({
    name: ['', [Validators.required]],
    ip: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(15)]],
    apiKey: ['', [Validators.required]],
  });

  private serverChangedSubscription!: Subscription;

  constructor(
    private fb: UntypedFormBuilder,
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.serverChangedSubscription = this.serversService.serversChanged.subscribe((createdServer: ServerDto) => {
      this.router.navigate(['../', createdServer.serverId], {
        relativeTo: this.route,
      });
    });
  }

  ngOnDestroy(): void {
    this.serverChangedSubscription.unsubscribe();
  }

  get serverName() {
    return this.form.controls['name'];
  }

  get ipAddress() {
    return this.form.controls['ip'];
  }

  get embyApiKey() {
    return this.form.controls['apiKey'];
  }

  onCreateServer() {
    const newServer = new ServerCreateDto(this.serverName.value, this.ipAddress.value, this.embyApiKey.value);
    this.serversService.createServer(newServer);
  }
}
