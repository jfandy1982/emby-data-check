import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { AbstractEntity } from '../../watch-state/models/abstract.entity';
import { EmbyUserEntity } from '../../emby-user/models/emby-user.entity';
import { ServerEntity } from '../../server/models/server.entity';

@Entity('installation')
export class InstallationEntity extends AbstractEntity {
  @Column({ unique: true })
  embyServerId: string;

  @Column({ default: false })
  isActive: boolean;

  @ManyToOne(() => ServerEntity, (server) => server.installations, {
    onDelete: 'CASCADE',
  })
  server: ServerEntity;

  @OneToMany(() => EmbyUserEntity, (embyUser) => embyUser.installation, {
    onDelete: 'NO ACTION',
  })
  embyUsers: EmbyUserEntity[];
}
