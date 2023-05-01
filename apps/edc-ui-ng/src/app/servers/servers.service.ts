import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Server } from '@shared-interfaces/edc';
import { catchError, map, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServersService {
  constructor(private readonly http: HttpClient) {}

  createNewServer(serverName: string) {
    const newServer: Server = { servername: serverName };
    // TODO: Replace hostname & port by environment configuration
    return this.http.post<Server>('http://localhost:3000/api/servers/create', newServer).pipe(
      catchError((errorResponse) => {
        console.log(errorResponse);
        return throwError(() => {
          return new Error(errorResponse.message);
        });
      })
    );
  }

  fetchServers() {
    // TODO: Replace hostname & port by environment configuration
    return this.http.get<Server>('http://localhost:3000/api/servers').pipe(
      map((responseData: any) => {
        const serversArray: Server[] = [];
        responseData.forEach((server: Server) => {
          serversArray.push(server);
        });
        return serversArray;
      }),
      catchError((errorResponse) => {
        return throwError(() => {
          return new Error(errorResponse.message);
        });
      })
    );
  }
}
