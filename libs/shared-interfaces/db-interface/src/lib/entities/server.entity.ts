import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { InstallationEntity } from './installation.entity';

@Entity('server')
export class ServerEntity extends AbstractEntity {
  @Column({ unique: true })
  servername: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  apiKey: string;

  @Column({ nullable: true })
  ipAddress: string;

  @Column({ default: 0 })
  port: number;

  @OneToMany(() => InstallationEntity, (installation) => installation.server, {
    onDelete: 'SET NULL',
  })
  installations: InstallationEntity[];
}
