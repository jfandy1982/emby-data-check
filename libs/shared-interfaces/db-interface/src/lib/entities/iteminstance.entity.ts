import { IsString, Length } from 'class-validator';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { ItemEntity } from './item.entity';
import { ServerInstanceEntity } from './serverinstance.entity';
import { WatchedInstanceEntity } from './watchedinstance.entity';

@Entity('iteminstance')
export class ItemInstanceEntity extends AbstractEntity {
  @Column({ type: 'varchar', nullable: false, length: 32, unique: true })
  @IsString({
    context: { entity: 'iteminstance', className: 'ItemInstanceEntity', errorCode: 'validation-0001' },
  })
  @Length(32, 32, {
    context: { entity: 'iteminstance', className: 'ItemInstanceEntity', errorCode: 'validation-0002' },
  })
  mediaItemIdFromEmbyDb: string;

  @ManyToOne(() => ItemEntity, (item) => item.iteminstances, {
    onDelete: 'NO ACTION',
    nullable: true,
  })
  item: ItemEntity;

  @ManyToOne(() => ServerInstanceEntity, (serverinstance) => serverinstance.iteminstances, { onDelete: 'NO ACTION', nullable: true })
  serverinstance: ServerInstanceEntity;

  @OneToMany(() => WatchedInstanceEntity, (watchedinstance) => watchedinstance.iteminstance, {
    onDelete: 'NO ACTION',
    nullable: true,
  })
  watchedinstances: WatchedInstanceEntity[];
}
