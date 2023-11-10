export interface EmbyProviderIdsDto {
  Tmdb: string;
  Imdb: string;
  Tvdb: string;
}

export interface EmbyTagItemDto {
  Name: string;
  Id: string;
}

export interface EmbyItemUserData {
  LastPlayedDate: string;
  PlayCount: number;
  Played: boolean;
}

export interface EmbyItemDto {
  Id: string;
  IsFolder: boolean;
  MediaType: string;
  Name: string;
  Overview: string;
  Path: string;
  ProviderIds: EmbyProviderIdsDto;
  ServerId: string;
  TagItems: EmbyTagItemDto[];
  Taglines: string[];
  Type: string;
  UserData: EmbyItemUserData;
}

export interface EmbyItemsDto {
  Items: EmbyItemDto[];
}
