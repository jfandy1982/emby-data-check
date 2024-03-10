import { ItemType, ProviderType } from '@edc/shared-interfaces/enum';

export interface MediaItemTags {
  id: string;
  tag: string;
}

export interface MediaItemInterface {
  id: string;
  itemidfromembydb: string;
  itemtype: ItemType;
  providertype: ProviderType;
  providerid: string;
  displayname: string;
  itemnameslug: string;
  path: string;
  tags: MediaItemTags[];
}
