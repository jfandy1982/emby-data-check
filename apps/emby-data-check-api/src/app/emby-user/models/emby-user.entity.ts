import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { AbstractEntity } from '../../watch-state/models/abstract.entity';
import { InstallationEntity } from '../../installation/models/installation.entity';
import { UserEntity } from '../../user/models/user.entity';
import { WatchStateEntity } from '../../watch-state/models/watch-state.entity';

@Entity('emby-user')
export class EmbyUserEntity extends AbstractEntity {
  @Column({ unique: true })
  embyUserId: string;

  @Column({ default: false })
  isActive: boolean;

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
