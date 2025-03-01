import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClientFooterNgComponent } from '@edc/ui/footer/ng';
import { ClientHeaderNgComponent } from '@edc/ui/header/ng';

@Component({
  imports: [RouterModule, ClientHeaderNgComponent, ClientFooterNgComponent],
  selector: 'edc-ng-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
