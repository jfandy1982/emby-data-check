import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@fundamental-ngx/core/button';

@Component({
  standalone: true,
  imports: [RouterModule, ButtonComponent],
  selector: 'edc-ngx-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
