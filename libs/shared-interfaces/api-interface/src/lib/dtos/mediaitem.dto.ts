import { ApiProperty, OmitType, PartialType, PickType } from '@nestjs/swagger';
import { IsArray, IsEnum, IsString, IsUUID, Length, MaxLength } from 'class-validator';
import { MediaItemInterface } from '../interfaces/mediaitem.interface';
import { ItemType, ProviderType } from '@edc/shared-interfaces/enum';

export class MediaItemDto implements MediaItemInterface {
  @IsString()
  @IsUUID('4')
  @ApiProperty({
    description: 'ID stored in EDC Backup table',
  })
  id: MediaItemInterface['id'];

  @IsString()
  @Length(32, 32)
  @ApiProperty({ description: 'Identifier as stored in the Emby DB assigned to the Server' })
  itemIdFromEmbyDb: MediaItemInterface['itemIdFromEmbyDb'];

  @IsEnum(ItemType)
  @ApiProperty({
    description: 'Type Identifier for the Mediaitem',
    enum: ItemType,
    default: ItemType.VIDEO,
  })
  itemType: MediaItemInterface['itemType'];

  @IsEnum(ProviderType)
  @ApiProperty({
    description: 'Provider Type Identifier, where the item information is taken from',
    enum: ProviderType,
    default: ProviderType.UNKNOWN,
  })
  providerType: MediaItemInterface['providerType'];

  @IsString()
  @MaxLength(20)
  @ApiProperty({ description: 'Value points to a record from the Provider Type, where the item information is taken from', maxLength: 20 })
  providerId: MediaItemInterface['providerId'];

  @IsString()
  @MaxLength(100)
  @ApiProperty({ description: 'Display value of the Item (e.g. a film title)', nullable: true, maxLength: 100 })
  displayName: MediaItemInterface['displayName'];

  @IsString()
  @MaxLength(100)
  @ApiProperty({ description: 'Slugified display name and/or file path information', nullable: true, maxLength: 100, uniqueItems: true })
  itemNameSlug: MediaItemInterface['itemNameSlug'];

  @IsString()
  @MaxLength(2048)
  @ApiProperty({ description: 'File path, where the item is stored', nullable: false, maxLength: 2048 })
  path: MediaItemInterface['path'];

  @IsArray()
  @ApiProperty({ description: 'Tags assigned to the Media Item', isArray: true, nullable: true })
  tags: MediaItemInterface['tags'];
}

export class CreateMediaItemDto extends PickType(MediaItemDto, [
  'itemType',
  'providerType',
  'providerId',
  'path',
  'displayName',
  'itemNameSlug',
  'itemIdFromEmbyDb',
]) {}
export class UpdateMediaItemDto extends OmitType(MediaItemDto, ['id']) {}
export class FilterMediaItemDto extends PartialType(UpdateMediaItemDto) {}
