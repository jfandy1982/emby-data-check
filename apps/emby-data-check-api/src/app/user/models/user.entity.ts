import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { EmbyUserEntity } from '../../emby-user/models/emby-user.entity';
import { UserRole } from './user-role.enum';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true, select: false })
  password: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
  role: UserRole;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  changedAt: Date;

  @OneToMany(() => EmbyUserEntity, (embyUser) => embyUser.user, {
    onDelete: 'SET NULL',
  })
  embyUsers: EmbyUserEntity[];
}