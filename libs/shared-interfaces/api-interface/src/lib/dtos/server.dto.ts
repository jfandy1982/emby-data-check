import { ApiProperty, OmitType, PartialType, PickType } from '@nestjs/swagger';
import { IsBoolean, IsIP, IsPort, IsString, IsUUID, Length, MaxLength } from 'class-validator';
import { ServerInterface } from '../interfaces/server.interface';

export class ServerDto implements ServerInterface {
  @IsString()
  @IsUUID('4')
  @ApiProperty({
    description: 'ID stored in EDC Backup table',
  })
  id: ServerInterface['id'];

  @IsString()
  @Length(32, 32)
  @ApiProperty({ description: 'ID for the server in a concrete Emby instance' })
  serverIdFromEmbyDb: ServerInterface['serverIdFromEmbyDb'];

  @IsString()
  @MaxLength(50)
  @ApiProperty({ description: 'Server Name' })
  servername: ServerInterface['servername'];

  @IsString()
  @MaxLength(100)
  @ApiProperty({ description: 'Descriptive text' })
  description: ServerInterface['description'];

  @IsBoolean()
  @ApiProperty({ description: 'This server is the one with the truth' })
  mainServer: ServerInterface['mainServer'];

  @IsBoolean()
  @ApiProperty({ description: 'This server is still relevant and managed' })
  isActive: ServerInterface['isActive'];

  @IsString()
  @Length(32, 32)
  @ApiProperty({ description: 'API Key of the Emby server required for REST API access' })
  apiKey: ServerInterface['apiKey'];

  @IsString()
  @IsIP('4')
  @ApiProperty({ description: 'IP Address of the server - used for REST API access' })
  ipAddress: ServerInterface['ipAddress'];

  @IsString()
  @IsPort()
  @ApiProperty({ description: 'Port number of the server - used for REST API access' })
  portNumber: ServerInterface['portNumber'];
}

export class CreateServerDto extends PickType(ServerDto, ['description', 'servername', 'apiKey', 'ipAddress', 'portNumber']) {}
export class UpdateServerDto extends OmitType(ServerDto, ['id']) {}
export class FilterServerDto extends PartialType(UpdateServerDto) {}
