import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { WatchStateEntity } from './watch-state.entity';

@Entity('media-item')
export class MediaItemEntity extends AbstractEntity {
  @Column()
  type: string;

  @Column()
  providerType: string;

  @Column()
  providerId: string;

  @Column()
  displayName: string;

  @Column({ nullable: true })
  itemNameSlug: string;

  @Column()
  path: string;

  @Column({ nullable: true })
  customTags: string;

  @OneToMany(() => WatchStateEntity, (watchState) => watchState.mediaItem, {
    onDelete: 'CASCADE',
  })
  watchStates: WatchStateEntity[];
}
