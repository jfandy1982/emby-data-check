import { ApiProperty, PartialType, PickType } from '@nestjs/swagger';
import { EmbyUserDto } from '../../emby-user/models/emby-user.interface';
import { MediaItemDto } from '../../media-item/models/media-item.interface';

export interface WatchStateDto {
  id?: string;
  mediaItem: MediaItemDto;
  embyUser: EmbyUserDto;
  isWatched: boolean;
  lastWatchedAt: Date;
}

export class WatchStateCreateDto {
  @ApiProperty()
  mediaItem: MediaItemDto;
  @ApiProperty()
  embyUser: EmbyUserDto;
  @ApiProperty()
  isWatched: boolean;
  @ApiProperty()
  lastWatchedAt: Date;
}

export class WatchStateUpdateDto extends PickType(WatchStateCreateDto, ['isWatched', 'lastWatchedAt'] as const) {}

export class WatchStateFilterDto extends PartialType(WatchStateCreateDto) {}
