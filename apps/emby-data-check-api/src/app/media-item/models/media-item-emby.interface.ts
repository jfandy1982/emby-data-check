export interface PublicProviderIdsEmbyDto {
  Tmbd?: string;
  Imdb?: string;
  Tvdb?: string;
}

export interface PublicTagItemEmbyDto {
  Name?: string;
  Id?: string;
}

export interface PublicItemEmbyDto {
  Name?: string;
  ServerId?: string;
  Id?: string;
  Type?: string;
  MediaType?: string;
  IsFolder?: boolean;
  Path?: string;
  ProviderIds?: PublicProviderIdsEmbyDto;
  TagItems?: PublicTagItemEmbyDto[];
  TagLines?: string[];
}

export class PublicItemsEmbyDto {
  Items?: PublicItemEmbyDto[];
}
