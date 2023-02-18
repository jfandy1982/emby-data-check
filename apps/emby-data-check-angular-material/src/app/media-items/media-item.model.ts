export class MediaItemDto {
  public mediaItemId: string;
  public embyMediaItemId: string;
  public serverId: string;
  public embyServerId: string;
  public embyDisplayName: string;
  public embyMediaType: string;

  constructor(
    mediaItemId: string,
    embyMediaItemId: string,
    embyServerId: string,
    serverId: string,
    embyDisplayName: string,
    embyMediaType: string
  ) {
    this.mediaItemId = mediaItemId;
    this.embyMediaItemId = embyMediaItemId;
    this.embyServerId = embyServerId;
    this.serverId = serverId;
    this.embyDisplayName = embyDisplayName;
    this.embyMediaType = embyMediaType;
  }
}
