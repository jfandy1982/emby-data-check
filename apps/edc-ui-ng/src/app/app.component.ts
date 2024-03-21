import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '@edc/ui/footer/ng';
import { HeaderComponent } from '@edc/ui/header/ng';

@Component({
  standalone: true,
  imports: [RouterModule, MatButtonModule, HeaderComponent, FooterComponent],
  selector: 'edc-ng-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
