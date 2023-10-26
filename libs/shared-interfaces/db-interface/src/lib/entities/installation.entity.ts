import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { EmbyUserEntity } from './emby-user.entity';
import { ServerEntity } from './server.entity';

@Entity('installation')
export class InstallationEntity extends AbstractEntity {
  @Column({ type: 'varchar', nullable: false, length: 32, unique: true })
  serverIdFromEmbyDb: string;

  @Column({ type: 'boolean', default: false })
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
