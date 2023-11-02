import { IsBoolean, IsIP, IsPort, IsString, Length, MaxLength } from 'class-validator';
import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { ServerInstanceEntity } from './serverinstance.entity';

@Entity('server')
export class ServerEntity extends AbstractEntity {
  @Column({ type: 'varchar', nullable: false, length: 50, unique: true })
  @IsString({
    context: { entity: 'server', className: 'ServerEntity', errorCode: 'validation-0001' },
  })
  @MaxLength(50, {
    context: { entity: 'server', className: 'ServerEntity', errorCode: 'validation-0002' },
  })
  servername: string;

  @Column({ type: 'varchar', nullable: true, length: 100 })
  @IsString({
    context: { entity: 'server', className: 'ServerEntity', errorCode: 'validation-0003' },
  })
  @MaxLength(100, {
    context: { entity: 'server', className: 'ServerEntity', errorCode: 'validation-0004' },
  })
  description: string;

  @Column({ type: 'boolean', default: false })
  @IsBoolean({
    context: { entity: 'server', className: 'ServerEntity', errorCode: 'validation-0005' },
  })
  isMainServer: boolean;

  @Column({ type: 'varchar', nullable: true, length: 32 })
  @IsString({
    context: { entity: 'server', className: 'ServerEntity', errorCode: 'validation-0006' },
  })
  @Length(32, 32, {
    context: { entity: 'server', className: 'ServerEntity', errorCode: 'validation-0007' },
  })
  apiKey: string;

  @Column({ type: 'inet', nullable: true })
  @IsString({
    context: { entity: 'server', className: 'ServerEntity', errorCode: 'validation-0008' },
  })
  @IsIP('4', {
    context: { entity: 'server', className: 'ServerEntity', errorCode: 'validation-0009' },
  })
  ipAddress: string;

  @Column({ type: 'smallint', nullable: true })
  @IsPort({ context: { entity: 'server', className: 'ServerEntity', errorCode: 'validation-0010' } })
  port: number;

  @OneToMany(() => ServerInstanceEntity, (serverinstance) => serverinstance.server, {
    onDelete: 'NO ACTION',
    nullable: true,
  })
  serverinstances: ServerInstanceEntity[];
}
