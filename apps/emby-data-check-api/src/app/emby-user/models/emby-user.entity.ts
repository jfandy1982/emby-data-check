import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { InstallationEntity } from '../../installation/models/installation.entity';
import { UserEntity } from '../../user/models/user.entity';
import { WatchStateEntity } from '../../watch-state/models/watch-state.entity';

@Entity('emby-user')
export class EmbyUserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  embyUserId: string;

  @Column({ default: false })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  changedAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.embyUsers, {
    onDelete: 'CASCADE',
  })
  user: UserEntity;

  @ManyToOne(() => InstallationEntity, (installation) => installation.embyUsers, { onDelete: 'NO ACTION' })
  installation: InstallationEntity;

  @OneToMany(() => WatchStateEntity, (watchState) => watchState.embyUser, {
    onDelete: 'CASCADE',
  })
  watchStates: WatchStateEntity[];
}
