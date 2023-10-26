import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { InstallationEntity } from './installation.entity';

@Entity('server')
export class ServerEntity extends AbstractEntity {
  @Column({ type: 'varchar', nullable: false, length: 50, unique: true })
  servername: string;

  @Column({ type: 'varchar', nullable: true, length: 100 })
  description: string;

  @Column({ type: 'varchar', nullable: true, length: 32 })
  apiKey: string;

  @Column({ type: 'inet', nullable: true })
  ipAddress: string;

  @Column({ type: 'smallint', nullable: true })
  port: number;

  @OneToMany(() => InstallationEntity, (installation) => installation.server, {
    onDelete: 'SET NULL',
  })
  installations: InstallationEntity[];
}
