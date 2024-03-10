import { ApiProperty, OmitType, PartialType, PickType } from '@nestjs/swagger';
import { IsEnum, IsString, IsStrongPassword, IsUUID, Length, MaxLength } from 'class-validator';
import { UserInterface, UserWatchedInterface } from '../interfaces/user.interface';
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
  userid: UserInterface['userid'];

  @IsString()
  @MaxLength(100)
  @ApiProperty({ description: 'Display Name of a user' })
  username: UserInterface['username'];

  @IsString()
  @IsStrongPassword({ minLength: 8 })
  @Length(8, 32)
  @ApiProperty({ description: 'encrypted password of a user' })
  password: UserInterface['password'];

  @IsEnum(UserRole)
  @ApiProperty({ description: 'User Role Identifier', enum: UserRole, default: UserRole.USER, nullable: false })
  userrole: UserInterface['userrole'];

  @ApiProperty({ description: 'Items, the user has watched already', isArray: true, nullable: true })
  watched: UserInterface['watched'];
}

export class CreateUserDto extends PickType(UserDto, ['userid', 'username', 'password', 'userrole']) {}
export class UpdateUserDto extends OmitType(UserDto, ['id']) {}
export class FilterUserDto extends PartialType(UpdateUserDto) {}
