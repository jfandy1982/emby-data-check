import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '@edc/ui/footer/ng';
import { HeaderComponent } from '@edc/ui/header/ng';

@Component({
  imports: [RouterModule, HeaderComponent, FooterComponent],
  selector: 'edc-ng-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
