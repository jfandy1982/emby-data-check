import { ApiProperty, PartialType, PickType } from '@nestjs/swagger';
import { EmbyUserDto } from '../../emby-user/models/emby-user.interface';
import { ServerDto } from '../../server/models/server.interface';

export class InstallationDto {
  id?: string;
  embyServerId: string;
  isActive: boolean;
  server: ServerDto;
  embyUsers?: EmbyUserDto[];
}

export class InstallationCreateDto {
  @ApiProperty({
    name: 'embyServerId',
    required: true,
    description: 'Unique identifier from Emby Server installation',
  })
  embyServerId: string;
  @ApiProperty({
    name: 'isActive',
    type: 'boolean',
    default: false,
    description: 'The active installation of the Emby Server',
    required: false,
  })
  isActive: boolean;
  @ApiProperty()
  server: ServerDto;
}

export class InstallationUpdateDto {
  id?: string;
  @ApiProperty({
    name: 'isActive',
    type: 'boolean',
    default: false,
    description: 'The active installation of the Emby Server',
    required: false,
  })
  isActive: boolean;
  //extends PickType(InstallationCreateDto, ['embyServerId', 'isActive'] as const) {}
}

export class InstallationFilterDto extends PartialType(InstallationCreateDto) {}
