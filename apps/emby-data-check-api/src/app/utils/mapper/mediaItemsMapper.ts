import { MediaItemEntity } from '../../media-item/models/media-item.entity';
import { MediaItemDto } from '../../media-item/models/media-item.interface';
import { WatchStatesMapper } from './watch-statesMapper';

export class MediaItemsMapper {
  public static mapMediaItemEntitiesToDtos(mediaItemEntities: MediaItemEntity[]): MediaItemDto[] {
    const mediaItemsFound: MediaItemDto[] = [];

    if (mediaItemEntities && mediaItemEntities.length > 0) {
      mediaItemEntities.forEach(function (v) {
        mediaItemsFound.push(MediaItemsMapper.mapMediaItemEntityToDto(v));
      });
    }

    return mediaItemsFound;
  }

  public static mapMediaItemEntityToDto(mediaItemEntity: MediaItemEntity): MediaItemDto {
    if (mediaItemEntity.watchStates && mediaItemEntity.watchStates.length > 0) {
      return {
        id: mediaItemEntity.id,
        type: mediaItemEntity.type,
        displayName: mediaItemEntity.displayName,
        itemNameSlug: mediaItemEntity.itemNameSlug,
        path: mediaItemEntity.path,
        providerId: mediaItemEntity.providerId,
        providerType: mediaItemEntity.providerType,
        customTags: mediaItemEntity.customTags,
        watchStates: WatchStatesMapper.mapWatchStateEntitiesToDtos(mediaItemEntity.watchStates),
      };
    } else {
      return {
        id: mediaItemEntity.id,
        type: mediaItemEntity.type,
        displayName: mediaItemEntity.displayName,
        itemNameSlug: mediaItemEntity.itemNameSlug,
        path: mediaItemEntity.path,
        providerId: mediaItemEntity.providerId,
        providerType: mediaItemEntity.providerType,
        customTags: mediaItemEntity.customTags,
      };
    }
  }
}
