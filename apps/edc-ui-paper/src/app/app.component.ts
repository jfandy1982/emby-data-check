import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '@edc/ui/footer/paper';
import { HeaderComponent } from '@edc/ui/header/paper';

@Component({
  imports: [RouterModule, HeaderComponent, FooterComponent, JsonPipe],
  selector: 'edc-paper-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  dataFromApi: unknown;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get('http://localhost:3000/api/servers/publicSystemInfo').subscribe({
      next: (data) => {
        this.dataFromApi = data;
      },
      error: (err) => console.error('Error occurred:', err),
    });
  }
}
