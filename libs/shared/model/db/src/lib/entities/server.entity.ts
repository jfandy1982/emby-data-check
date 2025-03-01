import { IsBoolean, IsIP, IsPort, IsString, Length, MaxLength } from 'class-validator';
import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { ServerInstanceEntity } from './serverinstance.entity';

@Entity('edc_server')
export class ServerEntity extends AbstractEntity {
  @Column({ type: 'varchar', nullable: false, length: 50, unique: true, name: 'name', comment: 'Unique server name' })
  @IsString({
    context: { entity: 'server', className: 'ServerEntity', errorCode: 'validation-0001' },
  })
  @MaxLength(50, {
    context: { entity: 'server', className: 'ServerEntity', errorCode: 'validation-0002' },
  })
  name: string;

  @Column({ type: 'varchar', nullable: true, length: 100, name: 'description', comment: 'Description or remarks for the server' })
  @IsString({
    context: { entity: 'server', className: 'ServerEntity', errorCode: 'validation-0003' },
  })
  @MaxLength(100, {
    context: { entity: 'server', className: 'ServerEntity', errorCode: 'validation-0004' },
  })
  description: string;

  @Column({ type: 'boolean', default: false, name: 'main_server', comment: 'This server is the one with the truth' })
  @IsBoolean({
    context: { entity: 'server', className: 'ServerEntity', errorCode: 'validation-0005' },
  })
  mainServer: boolean;

  @Column({
    type: 'varchar',
    nullable: true,
    length: 32,
    name: 'api_key',
    comment: 'API Key of the Emby server required for REST API access',
  })
  @IsString({
    context: { entity: 'server', className: 'ServerEntity', errorCode: 'validation-0006' },
  })
  @Length(32, 32, {
    context: { entity: 'server', className: 'ServerEntity', errorCode: 'validation-0007' },
  })
  apiKey: string;

  @Column({ type: 'inet', nullable: true, name: 'ip', comment: 'IP Address of the server - used for REST API access' })
  @IsString({
    context: { entity: 'server', className: 'ServerEntity', errorCode: 'validation-0008' },
  })
  @IsIP('4', {
    context: { entity: 'server', className: 'ServerEntity', errorCode: 'validation-0009' },
  })
  ipAddress: string;

  @Column({ type: 'smallint', nullable: true, name: 'port', comment: 'Port number of the server - used for REST API access' })
  @IsPort({ context: { entity: 'server', className: 'ServerEntity', errorCode: 'validation-0010' } })
  portNumber: number;

  @OneToMany(() => ServerInstanceEntity, (serverinstance) => serverinstance.server, {
    onDelete: 'NO ACTION',
    nullable: true,
  })
  serverinstances: ServerInstanceEntity[];
}
