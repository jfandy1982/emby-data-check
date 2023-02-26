import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { Pagination } from 'nestjs-typeorm-paginate';
import { DeleteResult } from 'typeorm';
import { ServerCreateDto, ServerDto } from '../models/server.interface';
import { ServerDbService } from '../service/server-db.service';

@ApiTags('servers')
@Controller('servers')
export class ServerController {
  constructor(private serverService: ServerDbService) {}

  @ApiBearerAuth()
  @ApiResponse({ isArray: true, status: HttpStatus.OK, description: 'List of Servers' })
  @Get()
  async findAllServers(@Query('page') page = 1, @Query('limit') limit = 10): Promise<Pagination<ServerDto>> {
    limit = limit > 100 ? 100 : limit;
    return this.serverService.findAllServers({ page, limit, route: 'http://localhost:3000/api/servers' });
  }

  @ApiBearerAuth()
  @ApiResponse({ status: HttpStatus.OK, description: 'A single Server' })
  @ApiParam({ name: 'id', description: 'ID of Server in Backup DB', required: true, example: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000' })
  @Get(':id')
  findOneServerById(@Param('id') id: string): Promise<ServerDto> {
    return this.serverService.findOneServerById(id);
  }

  @ApiBearerAuth()
  @ApiBody({ type: [ServerCreateDto] })
  @ApiResponse({ status: HttpStatus.OK, description: 'A Server saved in Backup DB' })
  @Post()
  async createNewServer(@Body() createServer: ServerCreateDto): Promise<ServerDto> {
    const newServer = this.createDtoToEntity(createServer);
    return this.serverService.createNewServer(newServer);
  }

  @ApiBearerAuth()
  @ApiResponse({ status: HttpStatus.OK, description: 'A Server deleted from Backup DB' })
  @ApiParam({ name: 'id', description: 'ID of Server in Backup DB', required: true, example: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000' })
  @Delete(':id')
  async deleteServer(@Param('id') id: string): Promise<DeleteResult> {
    return this.serverService.deleteServer(id);
  }

  private createDtoToEntity(createDto: ServerCreateDto): ServerDto {
    return {
      apiKey: createDto.apiKey,
      description: createDto.description,
      ipAddress: createDto.ipAddress,
      port: createDto.port,
      servername: createDto.servername,
    };
  }
}
