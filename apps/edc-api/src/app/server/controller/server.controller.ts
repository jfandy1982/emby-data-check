import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ServerDbService } from '../service/server-db.service';
import { Server } from '@shared-interfaces/edc';

@ApiTags('servers')
@Controller('servers')
export class ServerController {
  constructor(private readonly serverDbService: ServerDbService) {}

  @ApiBearerAuth()
  @ApiResponse({ isArray: true, status: HttpStatus.OK, description: 'List of managed Servers' })
  @Get()
  async findAllServers(): Promise<Server[]> {
    return this.serverDbService.findAllServers();
  }
}
