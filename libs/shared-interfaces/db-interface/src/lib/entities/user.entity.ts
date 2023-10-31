// import { UserRole } from '@edc/shared-interfaces/enums';
import { IsEnum, IsLowercase, IsString, IsStrongPassword, MaxLength, MinLength } from 'class-validator';
import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { EmbyUserEntity } from './emby-user.entity';

/* Keep in sync with enum UserRole in lib '@edc/shared-interfaces/enums' */
enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}

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

  @Column({ type: 'enum', nullable: false, enum: UserRole, default: UserRole.USER })
  @IsEnum(
    { UserRole },
    {
      context: { entity: 'user', className: 'UserEntity', errorCode: 'validation-0010' },
    },
  )
  role: UserRole;

  @OneToMany(() => EmbyUserEntity, (embyUser) => embyUser.user, {
    onDelete: 'SET NULL',
  })
  embyUsers: EmbyUserEntity[];
}
