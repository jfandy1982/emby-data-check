import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from '../servers.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'edc-ng-server-card',
  templateUrl: './server-edit.component.html',
  styleUrls: ['./server-edit.component.scss'],
})
export class ServerEditComponent implements OnInit, OnDestroy {
  form = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    ipAddress: ['', [Validators.required]],
    port: [8096, [Validators.required, Validators.max(64000)]],
    apiKey: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private serversService: ServersService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    return;
  }

  ngOnDestroy(): void {
    return;
  }

  onCreateServer() {
    this.serversService
      .createNewServer(
        this.serverName.value,
        this.serverDescription.value,
        this.serverIpAddress.value,
        this.serverPort.value,
        this.serverApiKey.value
      )
      .subscribe();
  }

  get serverName() {
    return this.form.controls['name'] as FormControl<string>;
  }

  get serverDescription() {
    return this.form.controls['description'] as FormControl<string>;
  }

  get serverIpAddress() {
    return this.form.controls['ipAddress'] as FormControl<string>;
  }

  get serverPort() {
    return this.form.controls['port'] as FormControl<number>;
  }

  get serverApiKey() {
    return this.form.controls['apiKey'] as FormControl<string>;
  }
}
