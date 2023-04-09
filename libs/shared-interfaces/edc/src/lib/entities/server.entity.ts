import { Column, Entity } from 'typeorm';
import { AbstractEntity } from './abstract.entity';

@Entity('edc-server')
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
}
