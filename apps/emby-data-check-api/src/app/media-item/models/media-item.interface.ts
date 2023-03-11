import { ApiProperty, PartialType, PickType } from '@nestjs/swagger';
import { WatchStateDto } from '../../watch-state/models/watch-state.interface';

export class MediaItemDto {
  id?: string;
  type: string;
  providerType: string;
  providerId: string;
  displayName: string;
  itemNameSlug: string;
  path: string;
  customTags: string;
  watchStates?: WatchStateDto[];
}

export class MediaItemCreateDto {
  @ApiProperty()
  type: string;
  @ApiProperty()
  providerType: string;
  @ApiProperty()
  providerId: string;
  @ApiProperty()
  displayName: string;
  @ApiProperty()
  path: string;
  @ApiProperty()
  customTags: string;
}

export class MediaItemUpdateDto extends PickType(MediaItemCreateDto, [
  'type',
  'providerType',
  'providerId',
  'displayName',
  'path',
  'customTags',
] as const) {}

export class MediaItemFilterDto extends PartialType(MediaItemCreateDto) {}
