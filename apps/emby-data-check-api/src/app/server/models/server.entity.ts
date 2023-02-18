import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { InstallationEntity } from '../../installation/models/installation.entity';

@Entity('server')
export class ServerEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  changedAt: Date;

  @OneToMany(() => InstallationEntity, (installation) => installation.server, {
    onDelete: 'SET NULL',
  })
  installations: InstallationEntity[];
}
