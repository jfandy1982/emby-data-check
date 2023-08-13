import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '@fundamental-ngx/core/button';

@Component({
  standalone: true,
  imports: [RouterModule, ButtonModule],
  selector: 'edc-fundamentals-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
