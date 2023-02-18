export class EmbyServerIdDetailsDto {
  public id: string;
  public active: boolean;

  constructor(id: string, active: boolean) {
    this.id = id;
    this.active = active;
  }
}

export class ServerDto {
  public serverId: string;
  public embyServerName: string;
  public embyServerIP: string;
  public embyApiKey?: string;
  public embyServerId?: EmbyServerIdDetailsDto[];

  constructor(serverId: string, embyServerName: string, embyServerIP: string, embyApiKey: string, embyServerId: EmbyServerIdDetailsDto[]) {
    this.serverId = serverId;
    this.embyServerName = embyServerName;
    this.embyServerIP = embyServerIP;
    this.embyApiKey = embyApiKey;
    this.embyServerId = embyServerId.slice();
  }
}

export class ServerCreateDto {
  public embyServerName: string;
  public embyServerIP: string;
  public embyApiKey: string;

  constructor(embyServerName: string, embyServerIP: string, embyApiKey: string) {
    this.embyServerName = embyServerName;
    this.embyServerIP = embyServerIP;
    this.embyApiKey = embyApiKey;
  }
}

export class ServerEditDto {
  public serverId: string;
  public embyServerName: string;
  public embyServerIP: string;
  public embyApiKey?: string;
  public embyServerId?: EmbyServerIdDetailsDto[];

  constructor(serverId: string, embyServerName: string, embyServerIP: string, embyApiKey: string, embyServerId: EmbyServerIdDetailsDto[]) {
    this.serverId = serverId;
    this.embyServerName = embyServerName;
    this.embyServerIP = embyServerIP;
    this.embyApiKey = embyApiKey;
    this.embyServerId = embyServerId.slice();
  }
}

export class ServerDeleteDto {
  public serverId: string;

  constructor(serverId: string) {
    this.serverId = serverId;
  }
}
