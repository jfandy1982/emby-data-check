import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '@edc/ui/footer/fundamentals';
import { HeaderComponent } from '@edc/ui/header/fundamentals';

@Component({
  imports: [RouterModule, HeaderComponent, FooterComponent],
  selector: 'edc-fundamentals-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
