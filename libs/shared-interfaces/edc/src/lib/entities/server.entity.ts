import { Column, Entity } from 'typeorm';
import { AbstractEntity } from './abstract.entity';

@Entity('server')
export class ServerEntity extends AbstractEntity {
  @Column({ unique: true })
  servername?: string;

  @Column()
  description?: string;

  @Column()
  apiKey?: string;

  @Column()
  ipAddress?: string;

  @Column({ default: 8096 })
  port?: number;
}
