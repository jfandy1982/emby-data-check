import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractEntity } from '../../watch-state/models/abstract.entity';
import { EmbyUserEntity } from '../../emby-user/models/emby-user.entity';
import { UserRole } from './user-role.enum';

@Entity('user')
export class UserEntity extends AbstractEntity {
  @Column({ unique: true })
  username: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true, select: false })
  password: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
  role: UserRole;

  @OneToMany(() => EmbyUserEntity, (embyUser) => embyUser.user, {
    onDelete: 'SET NULL',
  })
  embyUsers: EmbyUserEntity[];
}
