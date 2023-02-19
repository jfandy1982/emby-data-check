import { Controller, Get, HttpStatus, Param, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiResponse, ApiParam } from '@nestjs/swagger';
import { Pagination } from 'nestjs-typeorm-paginate';
import { ServerDto } from '../models/server.interface';
import { ServerService } from '../service/server.service';

@ApiTags('servers')
@Controller('servers')
export class ServerController {
  constructor(private serverService: ServerService) {}

  @ApiBearerAuth()
  @ApiResponse({ isArray: true, status: HttpStatus.OK, description: 'List of Servers' })
  @Get()
  async findAll(@Query('page') page = 1, @Query('limit') limit = 10): Promise<Pagination<ServerDto>> {
    limit = limit > 100 ? 100 : limit;
    return this.serverService.findAll({ page, limit, route: 'http://localhost:3000/api/servers' });
  }

  @ApiBearerAuth()
  @ApiResponse({ status: HttpStatus.OK, description: 'A single Server' })
  @ApiParam({ name: 'id', description: 'ID of Server in Backup DB', required: true, example: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000' })
  @Get(':id')
  findOneServer(@Param('id') id: string): Promise<ServerDto> {
    return this.serverService.findOne(id);
  }

  // @ApiBearerAuth()
  // @ApiBody({ type: [ServerCreateDto] })
  // @Post()
  // createServer(@Body() newServer: ServerCreateDto): Observable<ServerDto> {
  //   return this.serverService.createServer(newServer).pipe(
  //     map((createdServer) => {
  //       return createdServer;
  //     })
  //   );
  // }

  // @ApiBearerAuth()
  // @ApiBody({ type: [ServerUpdateDto] })
  // @Put(':id')
  // updateServer(@Param('id') id: string, @Body() updatedServer: ServerUpdateDto): Observable<ServerDto> {
  //   return this.serverService.updateServer(id, updatedServer);
  // }

  // @ApiBearerAuth()
  // @Delete(':id')
  // deleteServer(@Param('id') id: string): Observable<ServerDto> {
  //   return this.serverService.deleteServer(id);
  // }
}
