import { IsBoolean, IsString, Length } from 'class-validator';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { ItemInstanceEntity } from './iteminstance.entity';
import { ServerEntity } from './server.entity';
import { UserInstanceEntity } from './userinstance.entity';

@Entity('edc_serverinstance')
export class ServerInstanceEntity extends AbstractEntity {
  @Column({
    type: 'varchar',
    nullable: false,
    length: 32,
    unique: true,
    name: 'server_id_from_emby_db',
    comment: 'Identifier of the Emby Server taken from the concrete installation',
  })
  @IsString({
    context: { entity: 'serverinstance', className: 'ServerInstanceEntity', errorCode: 'validation-0001' },
  })
  @Length(32, 32, {
    context: { entity: 'serverinstance', className: 'ServerInstanceEntity', errorCode: 'validation-0002' },
  })
  serverIdFromEmbyDb: string;

  @Column({ type: 'boolean', default: false, name: 'active', comment: 'This server is still relevant and managed' })
  @IsBoolean({
    context: { entity: 'serverinstance', className: 'ServerInstanceEntity', errorCode: 'validation-0003' },
  })
  active: boolean;

  @ManyToOne(() => ServerEntity, (server) => server.serverinstances, {
    onDelete: 'NO ACTION',
    nullable: true,
  })
  server: ServerEntity;

  @OneToMany(() => UserInstanceEntity, (userinstance) => userinstance.serverinstance, {
    onDelete: 'NO ACTION',
    nullable: true,
  })
  userinstances: UserInstanceEntity[];

  @OneToMany(() => ItemInstanceEntity, (iteminstance) => iteminstance.serverinstance, { onDelete: 'NO ACTION', nullable: true })
  iteminstances: ItemInstanceEntity[];
}
