import { IsBoolean, IsDate } from 'class-validator';
import { Column, Entity, ManyToOne } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { ItemInstanceEntity } from './iteminstance.entity';
import { UserInstanceEntity } from './userinstance.entity';

@Entity('watchedinstance')
export class WatchedInstanceEntity extends AbstractEntity {
  @Column({
    type: 'boolean',
    default: false,
    name: 'watched',
    comment: 'The item has been watched by the user on the referenced server instance',
  })
  @IsBoolean({
    context: { entity: 'watchedinstance', className: 'WatchedInstanceEntity', errorCode: 'validation-0001' },
  })
  watched: boolean;

  @Column({ nullable: true, name: 'last_watched_at', comment: 'UTC timestamp, when the user watched the item the last time' })
  @IsDate({
    context: { entity: 'watchedinstance', className: 'WatchedInstanceEntity', errorCode: 'validation-0002' },
  })
  lastWatchedAt: Date;

  @ManyToOne(() => UserInstanceEntity, (userinstance) => userinstance.watchedinstances, {
    onDelete: 'NO ACTION',
    nullable: true,
  })
  userinstance: UserInstanceEntity;

  @ManyToOne(() => ItemInstanceEntity, (iteminstance) => iteminstance.watchedinstances, {
    onDelete: 'NO ACTION',
    nullable: true,
  })
  iteminstance: ItemInstanceEntity;
}
