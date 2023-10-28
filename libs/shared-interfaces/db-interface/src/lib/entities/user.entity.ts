import { IsLowercase, IsString, IsStrongPassword, MaxLength, MinLength } from 'class-validator';
import { Column, Entity, OneToMany } from 'typeorm';
// import { UserRole } from '../user-role.enum';
import { AbstractEntity } from './abstract.entity';
import { EmbyUserEntity } from './emby-user.entity';

@Entity('user')
export class UserEntity extends AbstractEntity {
  @Column({ type: 'varchar', nullable: false, length: 50, unique: true })
  @IsString({
    context: { entity: 'user', className: 'UserEntity', errorCode: 'validation-0001' },
  })
  @MaxLength(50, {
    context: { entity: 'user', className: 'UserEntity', errorCode: 'validation-0002' },
  })
  @IsLowercase({
    context: { entity: 'user', className: 'UserEntity', errorCode: 'validation-0003' },
  })
  username: string;

  @Column({ type: 'varchar', nullable: true, length: 100 })
  @IsString({
    context: { entity: 'user', className: 'UserEntity', errorCode: 'validation-0004' },
  })
  @MaxLength(100, {
    context: { entity: 'user', className: 'UserEntity', errorCode: 'validation-0005' },
  })
  name: string;

  @Column({ type: 'varchar', nullable: false, length: 32, select: false })
  @IsString({
    context: { entity: 'user', className: 'UserEntity', errorCode: 'validation-0006' },
  })
  @IsStrongPassword(
    { minLength: 8 },
    {
      context: { entity: 'user', className: 'UserEntity', errorCode: 'validation-0007' },
    },
  )
  @MinLength(8, {
    context: { entity: 'user', className: 'UserEntity', errorCode: 'validation-0008' },
  })
  @MaxLength(32, {
    context: { entity: 'user', className: 'UserEntity', errorCode: 'validation-0009' },
  })
  password: string;

  // @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
  // role: UserRole;

  @OneToMany(() => EmbyUserEntity, (embyUser) => embyUser.user, {
    onDelete: 'SET NULL',
  })
  embyUsers: EmbyUserEntity[];
}
