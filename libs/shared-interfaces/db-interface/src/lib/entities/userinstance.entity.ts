import { IsBoolean, IsString, Length } from 'class-validator';
import { Column, Entity, Index, ManyToOne, OneToMany } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { ServerInstanceEntity } from './serverinstance.entity';
import { UserEntity } from './user.entity';
import { WatchedInstanceEntity } from './watchedinstance.entity';

@Entity('edc_userinstance')
@Index(['userIdFromEmbyDb', 'serverinstance'], { unique: true })
export class UserInstanceEntity extends AbstractEntity {
  @Column({
    type: 'varchar',
    nullable: false,
    length: 32,
    unique: true,
    name: 'user_id_from_emby_db',
    comment: 'Identifier as stored in the Emby DB assigned to the Server',
  })
  @IsString({
    context: { entity: 'userinstance', className: 'UserInstanceEntity', errorCode: 'validation-0001' },
  })
  @Length(32, 32, {
    context: { entity: 'userinstance', className: 'UserInstanceEntity', errorCode: 'validation-0002' },
  })
  userIdFromEmbyDb: string;

  @Column({ type: 'boolean', default: false, name: 'active', comment: 'This user is still relevant and managed' })
  @IsBoolean({
    context: { entity: 'userinstance', className: 'UserInstanceEntity', errorCode: 'validation-0003' },
  })
  active: boolean;

  @ManyToOne(() => UserEntity, (user) => user.userinstances, {
    onDelete: 'NO ACTION',
    nullable: true,
  })
  user: UserEntity;

  @ManyToOne(() => ServerInstanceEntity, (serverinstance) => serverinstance.userinstances, { onDelete: 'NO ACTION', nullable: true })
  serverinstance: ServerInstanceEntity;

  @OneToMany(() => WatchedInstanceEntity, (watchedinstance) => watchedinstance.userinstance, {
    onDelete: 'NO ACTION',
    nullable: true,
  })
  watchedinstances: WatchedInstanceEntity[];
}
