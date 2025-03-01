import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '@edc/ui/footer/paper';
import { HeaderComponent } from '@edc/ui/header/paper';

@Component({
  imports: [RouterModule, HeaderComponent, FooterComponent],
  selector: 'edc-paper-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
