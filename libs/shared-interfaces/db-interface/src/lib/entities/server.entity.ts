import { IsIP, IsPort, IsString, Length, MaxLength } from 'class-validator';
import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { InstallationEntity } from './installation.entity';

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

  @Column({ type: 'varchar', nullable: true, length: 32 })
  @IsString({
    context: { entity: 'server', className: 'ServerEntity', errorCode: 'validation-0005' },
  })
  @Length(32, 32, {
    context: { entity: 'server', className: 'ServerEntity', errorCode: 'validation-0006' },
  })
  apiKey: string;

  @Column({ type: 'inet', nullable: true })
  @IsString({
    context: { entity: 'server', className: 'ServerEntity', errorCode: 'validation-0007' },
  })
  @IsIP('4', {
    context: { entity: 'server', className: 'ServerEntity', errorCode: 'validation-0008' },
  })
  ipAddress: string;

  @Column({ type: 'smallint', nullable: true })
  @IsPort({ context: { entity: 'server', className: 'ServerEntity', errorCode: 'validation-0009' } })
  port: number;

  @OneToMany(() => InstallationEntity, (installation) => installation.server, {
    onDelete: 'SET NULL',
  })
  installations: InstallationEntity[];
}
