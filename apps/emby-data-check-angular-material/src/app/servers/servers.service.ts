import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ServerDto, ServerCreateDto, EmbyServerIdDetailsDto, ServerDeleteDto } from './server.model';

@Injectable({
  providedIn: 'root',
})
export class ServersService {
  serversChanged = new Subject<ServerDto>();
  activeServerId = '';

  servers: ServerDto[] = [
    {
      serverId: 'S-1',
      embyServerIP: '192.168.173.2',
      embyServerName: 'schierke',
      embyApiKey: 'a9738250ad7d4b0791a76a9a09c8905c',
    },
    {
      serverId: 'S-2',
      embyServerIP: '192.168.173.5',
      embyServerName: 'pcs_nas',
      embyApiKey: 'b0791a76a9a09c8905ca9738250ad7d4',
    },
  ];

  getServers(): ServerDto[] {
    return this.servers.slice();
  }

  getServer(serverId: string): ServerDto {
    const foundServer = this.findServerById(serverId);
    if (foundServer) {
      return foundServer;
    } else {
      throw Error('Server with ID [' + serverId + '] not found in Array of ServersService');
    }
  }

  getIdOfActivatedServer(): string {
    return this.activeServerId;
  }

  findServerById(serverId: string): ServerDto | undefined {
    return this.servers.find((server) => {
      return server.serverId === serverId;
    });
  }

  createServer(server: ServerCreateDto) {
    const emptyEmbyServerId: EmbyServerIdDetailsDto[] = [];
    const newServer = new ServerDto(
      'S-' + (this.servers.length + 1),
      server.embyServerName,
      server.embyServerIP,
      server.embyApiKey,
      emptyEmbyServerId
    );
    this.servers.push(newServer);
    this.serversChanged.next(newServer);
  }

  deleteServer(deletedServer: ServerDeleteDto) {
    const foundServer = this.findServerById(deletedServer.serverId);
    if (foundServer) {
      const foundIndex = this.servers.indexOf(foundServer);
      this.servers.splice(foundIndex, 1);
      this.serversChanged.next(foundServer);
    }
  }

  activateServer(activatedServer: ServerDto) {
    const foundServer = this.findServerById(activatedServer.serverId);
    if (foundServer) {
      this.activeServerId = foundServer.serverId;
    }
  }

  deactivateServer(deactivatedServer: ServerDto) {
    const foundServer = this.findServerById(deactivatedServer.serverId);
    if (foundServer) {
      this.activeServerId = foundServer.serverId;
    }
  }
}
