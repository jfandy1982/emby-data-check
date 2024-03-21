import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '@edc/ui/footer/ngx';
import { HeaderComponent } from '@edc/ui/header/ngx';
import { ButtonComponent } from '@fundamental-ngx/core/button';

@Component({
  standalone: true,
  imports: [RouterModule, ButtonComponent, HeaderComponent, FooterComponent],
  selector: 'edc-ngx-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
