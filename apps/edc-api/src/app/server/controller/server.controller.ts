import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ServerDbService } from '../service/server-db.service';
import { Server, ServerEntity } from '@shared-interfaces/edc';

@ApiTags('servers')
@Controller('servers')
export class ServerController {
  constructor(private readonly serverDbService: ServerDbService) {}

  //@ApiBearerAuth()
  @ApiResponse({ isArray: true, status: HttpStatus.OK, description: 'List of managed Servers' })
  @Get()
  async findAllServers(): Promise<Server[]> {
    return this.serverDbService.findAllServers();
  }

  //@ApiBearerAuth()
  //@ApiBody({ type: [ServerEntity] })
  @ApiResponse({ status: HttpStatus.OK, description: 'A Server saved in Backup DB' })
  @Post('create')
  async createNewServer(@Body() createServer: Server): Promise<Server> {
    return this.serverDbService.createNewServer(createServer);
  }
}
