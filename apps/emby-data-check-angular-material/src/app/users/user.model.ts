export class UserDto {
  public userId: string;
  public embyUserId: string;
  public serverId: string;
  public embyServerId: string;
  public embyUserName: string;

  constructor(userId: string, embyUserId: string, serverId: string, embyServerId: string, embyUserName: string) {
    this.userId = userId;
    this.embyUserId = embyUserId;
    this.serverId = serverId;
    this.embyServerId = embyServerId;
    this.embyUserName = embyUserName;
  }
}
