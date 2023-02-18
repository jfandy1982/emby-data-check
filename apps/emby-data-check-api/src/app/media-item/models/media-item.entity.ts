import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { WatchStateEntity } from '../../watch-state/models/watch-state.entity';

@Entity('media-item')
export class MediaItemEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  changedAt: Date;

  @OneToMany(() => WatchStateEntity, (watchState) => watchState.mediaItem, {
    onDelete: 'CASCADE',
  })
  watchStates: WatchStateEntity[];
}
