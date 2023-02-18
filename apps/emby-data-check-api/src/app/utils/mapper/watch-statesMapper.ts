import { WatchStateEntity } from '../../watch-state/models/watch-state.entity';
import { WatchStateDto } from '../../watch-state/models/watch-state.interface';
import { EmbyUsersMapper } from './emby-usersMapper';
import { MediaItemsMapper } from './mediaItemsMapper';

export class WatchStatesMapper {
  public static mapWatchStateEntitiesToDtos(watchStateEntities: WatchStateEntity[]): WatchStateDto[] {
    const watchStatesFound: WatchStateDto[] = [];

    if (watchStateEntities && watchStateEntities.length > 0) {
      watchStateEntities.forEach(function (v) {
        watchStatesFound.push(WatchStatesMapper.mapWatchStateEntityToDto(v));
      });
    }

    return watchStatesFound;
  }

  public static mapWatchStateEntityToDto(watchStateEntity: WatchStateEntity): WatchStateDto {
    return {
      id: watchStateEntity.id,
      isWatched: watchStateEntity.isWatched,
      lastWatchedAt: watchStateEntity.lastWatchedAt,
      embyUser: EmbyUsersMapper.mapEmbyUserEntityToDto(watchStateEntity.embyUser),
      mediaItem: MediaItemsMapper.mapMediaItemEntityToDto(watchStateEntity.mediaItem),
    };
  }
}
