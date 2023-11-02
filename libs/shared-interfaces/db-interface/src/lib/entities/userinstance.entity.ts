import { IsBoolean, IsString, Length } from 'class-validator';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { ServerInstanceEntity } from './serverinstance.entity';
import { UserEntity } from './user.entity';
import { WatchedInstanceEntity } from './watchedinstance.entity';

@Entity('userinstance')
export class UserInstanceEntity extends AbstractEntity {
  @Column({ type: 'varchar', nullable: false, length: 32, unique: true })
  @IsString({
    context: { entity: 'userinstance', className: 'UserInstanceEntity', errorCode: 'validation-0001' },
  })
  @Length(32, 32, {
    context: { entity: 'userinstance', className: 'UserInstanceEntity', errorCode: 'validation-0002' },
  })
  userIdFromEmbyDb: string;

  @Column({ type: 'boolean', default: false })
  @IsBoolean({
    context: { entity: 'userinstance', className: 'UserInstanceEntity', errorCode: 'validation-0003' },
  })
  isActive: boolean;

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
