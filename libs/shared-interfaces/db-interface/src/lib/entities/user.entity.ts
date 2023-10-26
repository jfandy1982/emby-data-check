import { Column, Entity, OneToMany } from 'typeorm';
// import { UserRole } from '../user-role.enum';
import { AbstractEntity } from './abstract.entity';
import { EmbyUserEntity } from './emby-user.entity';

@Entity('user')
export class UserEntity extends AbstractEntity {
  @Column({ type: 'varchar', nullable: false, length: 50, unique: true })
  username: string;

  @Column({ type: 'varchar', nullable: true, length: 100 })
  name: string;

  @Column({ type: 'varchar', nullable: false, length: 32, select: false })
  password: string;

  // @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
  // role: UserRole;

  @OneToMany(() => EmbyUserEntity, (embyUser) => embyUser.user, {
    onDelete: 'SET NULL',
  })
  embyUsers: EmbyUserEntity[];
}
