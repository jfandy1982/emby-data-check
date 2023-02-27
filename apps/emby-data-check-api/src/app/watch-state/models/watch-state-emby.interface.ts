export interface PublicUserDataEmbyDto {
  PlayCount?: number;
  Played?: boolean;
  LastPlayedDate?: Date;
}

export interface PublicWatchStateEmbyDto {
  Name?: string;
  ServerId?: string;
  Id?: string;
  Type?: string;
  MediaType?: string;
  SeriesName?: string;
  SeriesId?: string;
  SeasonName?: string;
  SeasonId?: string;
  UserData?: PublicUserDataEmbyDto;
}

export class PublicWatchStatesEmbyDto {
  Items?: PublicWatchStateEmbyDto[];
}
