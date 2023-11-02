import { IsBoolean, IsDate } from 'class-validator';
import { Column, Entity, ManyToOne } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { ItemInstanceEntity } from './iteminstance.entity';
import { UserInstanceEntity } from './userinstance.entity';

@Entity('watchedinstance')
export class WatchedInstanceEntity extends AbstractEntity {
  @Column({ type: 'boolean', default: false, comment: 'Does this comment reach the DB?' })
  @IsBoolean({
    context: { entity: 'watchedinstance', className: 'WatchedInstanceEntity', errorCode: 'validation-0001' },
  })
  isWatched: boolean;

  @Column({ nullable: true })
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
