import { ApiProperty, OmitType, PartialType, PickType } from '@nestjs/swagger';
import { IsEnum, IsString, IsStrongPassword, IsUUID, Length, MaxLength } from 'class-validator';
import { UserInterface } from '../interfaces/user.interface';
import { UserRole } from '@edc/shared-interfaces/enum';

export class UserDto implements UserInterface {
  @IsString()
  @IsUUID('4')
  @ApiProperty({
    description: 'ID stored in EDC Backup table',
  })
  id: UserInterface['id'];

  @IsString()
  @Length(32, 32)
  @ApiProperty({ description: 'ID for the user in a concrete Emby instance' })
  userIdFromEmbyDb: UserInterface['userIdFromEmbyDb'];

  @IsString()
  @MaxLength(50)
  @ApiProperty({ description: 'Unique user name' })
  userId: UserInterface['userId'];

  @IsString()
  @MaxLength(100)
  @ApiProperty({ description: 'Display Name of a user' })
  userName: UserInterface['userName'];

  @IsString()
  @IsStrongPassword({ minLength: 8 })
  @Length(8, 32)
  @ApiProperty({ description: 'encrypted password of a user' })
  password: UserInterface['password'];

  @IsEnum(UserRole)
  @ApiProperty({ description: 'User Role Identifier', enum: UserRole, default: UserRole.USER, nullable: false })
  userRole: UserInterface['userRole'];

  @ApiProperty({ description: 'Items, the user has watched already', isArray: true, nullable: true })
  watchedItems: UserInterface['watchedItems'];
}

export class CreateUserDto extends PickType(UserDto, ['userId', 'userName', 'password', 'userRole']) {}
export class UpdateUserDto extends OmitType(UserDto, ['id']) {}
export class FilterUserDto extends PartialType(UpdateUserDto) {}
