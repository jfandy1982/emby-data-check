//import { UserRole } from '@edc/shared/model/enum';
import { IsEnum, IsLowercase, IsString, IsStrongPassword, MaxLength, MinLength } from 'class-validator';
import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { UserInstanceEntity } from './userinstance.entity';

/* Keep in sync with enum UserRole in lib '@edc/shared/model/enum' */
enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}

@Entity('edc_user')
export class UserEntity extends AbstractEntity {
  @Column({ type: 'varchar', nullable: false, length: 50, unique: true, name: 'user_id', comment: 'Unique user name' })
  @IsString({
    context: { entity: 'user', className: 'UserEntity', errorCode: 'validation-0001' },
  })
  @MaxLength(50, {
    context: { entity: 'user', className: 'UserEntity', errorCode: 'validation-0002' },
  })
  @IsLowercase({
    context: { entity: 'user', className: 'UserEntity', errorCode: 'validation-0003' },
  })
  userId!: string;

  @Column({ type: 'varchar', nullable: true, length: 100, name: 'user_name', comment: 'Display Name of a user' })
  @IsString({
    context: { entity: 'user', className: 'UserEntity', errorCode: 'validation-0004' },
  })
  @MaxLength(100, {
    context: { entity: 'user', className: 'UserEntity', errorCode: 'validation-0005' },
  })
  userName!: string;

  @Column({ type: 'varchar', nullable: false, length: 32, select: false, name: 'password', comment: 'encrypted password of a user' })
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
  password!: string;

  @Column({ type: 'enum', nullable: false, enum: UserRole, default: UserRole.USER, name: 'user_role', comment: 'User Role Identifier' })
  @IsEnum(
    { UserRole },
    {
      context: { entity: 'user', className: 'UserEntity', errorCode: 'validation-0010' },
    },
  )
  userRole!: UserRole;

  @OneToMany(() => UserInstanceEntity, (userinstance) => userinstance.user, {
    onDelete: 'NO ACTION',
    nullable: true,
  })
  userinstances!: UserInstanceEntity[];
}
