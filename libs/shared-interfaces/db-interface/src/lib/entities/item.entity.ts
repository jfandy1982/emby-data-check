// import { ItemType, ProviderType } from '@edc/shared-interfaces/enums';
import { IsEnum, IsString, MaxLength } from 'class-validator';
import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { ItemInstanceEntity } from './iteminstance.entity';

/* Keep in sync with enum MediaItemType in lib '@edc/shared-interfaces/enums' */
enum ItemType {
  EPISODE = 'Episode',
  MOVIE = 'Movie',
  MUSICVIDEO = 'MusicVideo',
  SEASON = 'Season',
  SERIES = 'Series',
  VIDEO = 'Video',
}

/* Keep in sync with enum ProviderType in lib '@edc/shared-interfaces/enums' */
export enum ProviderType {
  IMDB = 'Imdb',
  TMDB = 'Tmdb',
  TVDB = 'Tvdb',
  UNKNOWN = 'Unknown',
}

@Entity('item')
export class ItemEntity extends AbstractEntity {
  @Column({
    type: 'enum',
    nullable: false,
    enum: ItemType,
    default: ItemType.VIDEO,
    name: 'item_type',
    comment: 'Type Identifier for the Item',
  })
  @IsEnum(
    { ItemType },
    {
      context: { entity: 'item', className: 'ItemEntity', errorCode: 'validation-0001' },
    },
  )
  itemType: ItemType;

  @Column({
    type: 'enum',
    nullable: false,
    enum: ProviderType,
    default: ProviderType.UNKNOWN,
    name: 'provider_type',
    comment: 'Provider Type Identifier, where the item information is taken from',
  })
  @IsEnum(
    { ProviderType },
    {
      context: { entity: 'item', className: 'ItemEntity', errorCode: 'validation-0002' },
    },
  )
  providerType: ProviderType;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 20,
    name: 'provider_id',
    comment: 'Value points to a record from the Provider Type, where the item information is taken from',
  })
  @IsString({
    context: { entity: 'item', className: 'ItemEntity', errorCode: 'validation-0003' },
  })
  @MaxLength(20, {
    context: { entity: 'item', className: 'ItemEntity', errorCode: 'validation-0004' },
  })
  providerId: string;

  @Column({ type: 'varchar', nullable: true, length: 100, name: 'display_name', comment: 'Display value of the Item (e.g. a film title)' })
  @IsString({
    context: { entity: 'item', className: 'ItemEntity', errorCode: 'validation-0005' },
  })
  @MaxLength(100, {
    context: { entity: 'item', className: 'ItemEntity', errorCode: 'validation-0006' },
  })
  displayName: string;

  @Column({
    type: 'varchar',
    nullable: true,
    length: 100,
    unique: true,
    name: 'item_slug',
    comment: 'Slugified display name and/or file path information',
  })
  @IsString({
    context: { entity: 'item', className: 'ItemEntity', errorCode: 'validation-0007' },
  })
  @MaxLength(100, {
    context: { entity: 'item', className: 'ItemEntity', errorCode: 'validation-0008' },
  })
  itemNameSlug: string;

  @Column({ type: 'varchar', nullable: false, length: 2048, name: 'path', comment: 'File path, where the item is stored' })
  @IsString({
    context: { entity: 'item', className: 'ItemEntity', errorCode: 'validation-0009' },
  })
  @MaxLength(2048, {
    context: { entity: 'item', className: 'ItemEntity', errorCode: 'validation-0010' },
  })
  path: string;

  // @Column({ type: 'varchar', nullable: true, length: 2048 })
  // customTags: string;

  @OneToMany(() => ItemInstanceEntity, (iteminstance) => iteminstance.item, {
    onDelete: 'NO ACTION',
    nullable: true,
  })
  iteminstances: ItemEntity[];
}
