import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { EmbyUserEntity } from '../../emby-user/models/emby-user.entity';
import { ServerEntity } from '../../server/models/server.entity';

@Entity('installation')
export class InstallationEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  embyServerId: string;

  @Column({ default: false })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  changedAt: Date;

  @ManyToOne(() => ServerEntity, (server) => server.installations, {
    onDelete: 'CASCADE',
  })
  server: ServerEntity;

  @OneToMany(() => EmbyUserEntity, (embyUser) => embyUser.installation, {
    onDelete: 'NO ACTION',
  })
  embyUsers: EmbyUserEntity[];
}
