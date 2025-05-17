import { IsString, IsUUID, MaxLength } from 'class-validator';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ItemEntity } from './item.entity';

@Entity('edc_tag')
export class TagEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'uuid', comment: 'Unique Identifier for the record' })
  @IsString({
    context: { entity: 'tag', className: 'TagEntity', errorCode: 'validation-0001' },
  })
  @IsUUID('4', {
    context: { entity: 'tag', className: 'TagEntity', errorCode: 'validation-0002' },
  })
  id!: string;

  @Column({ type: 'varchar', nullable: false, unique: true, length: 50, name: 'tag', comment: 'Display value of a tag' })
  @IsString({
    context: { entity: 'tag', className: 'TagEntity', errorCode: 'validation-0003' },
  })
  @MaxLength(50, {
    context: { entity: 'tag', className: 'TagEntity', errorCode: 'validation-0004' },
  })
  tag!: string;

  @ManyToMany(() => ItemEntity, (item) => item.tags, { onDelete: 'NO ACTION' })
  items!: ItemEntity[];
}
