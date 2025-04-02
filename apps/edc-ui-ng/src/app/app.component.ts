import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '@edc/ui/footer/ng';
import { HeaderComponent } from '@edc/ui/header/ng';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [RouterModule, HeaderComponent, FooterComponent, JsonPipe],
  selector: 'edc-ng-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  dataFromApi: unknown;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:3000/api/servers/publicSystemInfo').subscribe({
      next: (data) => {
        this.dataFromApi = data;
      },
      error: (err) => console.error('Error occurred:', err),
    });
  }
}
