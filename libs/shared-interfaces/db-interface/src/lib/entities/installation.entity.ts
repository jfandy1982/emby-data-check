import { IsBoolean, IsString, Length } from 'class-validator';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { EmbyUserEntity } from './emby-user.entity';
import { ServerEntity } from './server.entity';

@Entity('installation')
export class InstallationEntity extends AbstractEntity {
  @Column({ type: 'varchar', nullable: false, length: 32, unique: true })
  @IsString({
    context: { entity: 'installation', className: 'InstallationEntity', errorCode: 'validation-0001' },
  })
  @Length(32, 32, {
    context: { entity: 'installation', className: 'InstallationEntity', errorCode: 'validation-0002' },
  })
  serverIdFromEmbyDb: string;

  @Column({ type: 'boolean', default: false })
  @IsBoolean({
    context: { entity: 'installation', className: 'InstallationEntity', errorCode: 'validation-0003' },
  })
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
