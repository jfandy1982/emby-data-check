import { IsBoolean, IsString, Length } from 'class-validator';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { ItemInstanceEntity } from './iteminstance.entity';
import { ServerEntity } from './server.entity';
import { UserInstanceEntity } from './userinstance.entity';

@Entity('serverinstance')
export class ServerInstanceEntity extends AbstractEntity {
  @Column({ type: 'varchar', nullable: false, length: 32, unique: true })
  @IsString({
    context: { entity: 'serverinstance', className: 'ServerInstanceEntity', errorCode: 'validation-0001' },
  })
  @Length(32, 32, {
    context: { entity: 'serverinstance', className: 'ServerInstanceEntity', errorCode: 'validation-0002' },
  })
  serverIdFromEmbyDb: string;

  @Column({ type: 'boolean', default: false })
  @IsBoolean({
    context: { entity: 'serverinstance', className: 'ServerInstanceEntity', errorCode: 'validation-0003' },
  })
  isActive: boolean;

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
