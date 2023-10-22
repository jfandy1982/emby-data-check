import { ApiProperty, PartialType, PickType } from '@nestjs/swagger';

export class ServerDto {
  id?: string;
  servername?: string;
  description?: string;
  apiKey?: string;
  ipAddress?: string;
  port?: number;
}

export class ServerCreateDto {
  @ApiProperty({
    name: 'servername',
    required: true,
    description: 'Display name of an Emby Server',
  })
  servername?: string;

  @ApiProperty({
    name: 'description',
    required: true,
    description: 'Long description of an Emby Server',
  })
  description?: string;

  @ApiProperty()
  apiKey?: string;

  @ApiProperty()
  ipAddress?: string;

  @ApiProperty()
  port?: number;
}

export class ServerUpdateDto extends PickType(ServerCreateDto, ['description', 'apiKey', 'ipAddress', 'port'] as const) {}

export class ServerFilterDto extends PartialType(ServerCreateDto) {}
