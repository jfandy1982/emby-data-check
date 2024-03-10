export interface EmbyProviderIdsInterface {
  Tmdb: string;
  Imdb: string;
  Tvdb: string;
}

export interface EmbyTagItemInterface {
  Name: string;
  Id: string;
}

export interface EmbyItemUserDataInterface {
  LastPlayedDate: string;
  PlayCount: number;
  Played: boolean;
}

export interface EmbyItemInterface {
  Id: string;
  IsFolder: boolean;
  MediaType: string;
  Name: string;
  Overview: string;
  Path: string;
  ProviderIds: EmbyProviderIdsInterface;
  ServerId: string;
  TagItems: EmbyTagItemInterface[];
  Taglines: string[];
  Type: string;
  UserData: EmbyItemUserDataInterface;
}

export interface EmbyItemsInterface {
  Items: EmbyItemInterface[];
}
