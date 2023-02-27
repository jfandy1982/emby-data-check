export interface PublicSystemInfoEmbyDto {
  LocalAddress?: string;
  WanAddress?: string;
  ServerName?: string;
  Version?: string;
  Id?: string;
}

export class InstallationInfoDto {
  servername?: string;
  installationid?: string;
}
