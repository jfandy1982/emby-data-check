import { ItemType, ProviderType } from '@edc/shared-interfaces/enum';

export interface MediaItemTags {
  id: string;
  tag: string;
}

export interface MediaItemInterface {
  id: string;
  itemIdFromEmbyDb: string;
  itemType: ItemType;
  providerType: ProviderType;
  providerId: string;
  displayName: string;
  itemNameSlug: string;
  path: string;
  tags: MediaItemTags[];
}
