import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { EmbyUserEntity } from '../../emby-user/models/emby-user.entity';
import { MediaItemEntity } from '../../media-item/models/media-item.entity';

@Entity('watch-state')
export class WatchStateEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: false })
  isWatched: boolean;

  @Column({ nullable: true })
  lastWatchedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  changedAt: Date;

  @ManyToOne(() => EmbyUserEntity, (embyUser) => embyUser.watchStates, {
    onDelete: 'NO ACTION',
  })
  embyUser: EmbyUserEntity;

  @ManyToOne(() => MediaItemEntity, (mediaItem) => mediaItem.watchStates, {
    onDelete: 'NO ACTION',
  })
  mediaItem: MediaItemEntity;
}
