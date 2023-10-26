import { Column, Entity, ManyToOne } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { EmbyUserEntity } from './emby-user.entity';
import { MediaItemEntity } from './media-item.entity';

@Entity('watch-state')
export class WatchStateEntity extends AbstractEntity {
  @Column({ type: 'boolean', default: false })
  isWatched: boolean;

  @Column({ nullable: true })
  lastWatchedAt: Date;

  @ManyToOne(() => EmbyUserEntity, (embyUser) => embyUser.watchStates, {
    onDelete: 'NO ACTION',
  })
  embyUser: EmbyUserEntity;

  @ManyToOne(() => MediaItemEntity, (mediaItem) => mediaItem.watchStates, {
    onDelete: 'NO ACTION',
  })
  mediaItem: MediaItemEntity;
}
