import { ApiProperty, PartialType, PickType } from '@nestjs/swagger';
import { EmbyUserDto } from '../../emby-user/models/emby-user.interface';
import { UserRole } from './user-role.enum';

export interface UserDto {
  id?: string;
  username: string;
  name: string;
  password: string;
  role: UserRole;
  embyUsers?: EmbyUserDto[];
}

export class UserCreateDto {
  @ApiProperty()
  username: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  role: UserRole;
}

export class UserUpdateDto extends PickType(UserCreateDto, ['name', 'role'] as const) {}

export class UserFilterDto extends PartialType(UserCreateDto) {}
