import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '@edc/ui/footer/nord';
import { HeaderComponent } from '@edc/ui/header/nord';

@Component({
  imports: [RouterModule, HeaderComponent, FooterComponent],
  selector: 'edc-nord-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
