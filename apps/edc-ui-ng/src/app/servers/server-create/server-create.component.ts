import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from '../servers.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'edc-ng-server-create',
  templateUrl: './server-create.component.html',
  styleUrls: ['./server-create.component.scss'],
})
export class ServerCreateComponent implements OnInit, OnDestroy {
  form = this.fb.group({ name: ['', [Validators.required]] });

  constructor(private fb: FormBuilder, private serversService: ServersService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  onCreateServer() {
    this.serversService.createNewServer(this.serverName.value).subscribe();
  }

  get serverName() {
    return this.form.controls['name'] as FormControl<string>;
  }
}
