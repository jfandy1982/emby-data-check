import { ApiProperty, PartialType, PickType } from '@nestjs/swagger';
import { InstallationDto } from '../../installation/models/installation.interface';
import { UserDto } from '../../user/models/user.interface';
import { WatchStateDto } from '../../watch-state/models/watch-state.interface';

export class EmbyUserDto {
  id?: string;
  embyUserId: string;
  isActive: boolean;
  user: UserDto;
  installation: InstallationDto;
  watchStates?: WatchStateDto[];
}

export class EmbyUserCreateDto {
  @ApiProperty({
    name: 'embyUserId',
    required: true,
    description: 'Unique identifier from Emby Server installation for this user',
  })
  embyUserId: string;
  @ApiProperty({
    name: 'isActive',
    type: 'boolean',
    default: false,
    description: 'The active user on the Emby Server Installation',
    required: false,
  })
  isActive?: boolean;
  @ApiProperty()
  user: UserDto;
  @ApiProperty()
  installation: InstallationDto;
}

export class EmbyUserUpdateDto {
  id?: string;
  @ApiProperty({
    name: 'isActive',
    type: 'boolean',
    default: false,
    description: 'The active user on the Emby Server Installation',
    required: false,
  })
  isActive?: boolean;
  //extends PickType(EmbyUserCreateDto, ['isActive'] as const) {}
}

export class EmbyUserFilterDto extends PartialType(EmbyUserCreateDto) {}
