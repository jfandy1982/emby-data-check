import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { Observable, map } from 'rxjs';
import { ServerDto, ServerCreateDto, ServerUpdateDto } from '../models/server.interface';
import { ServerService } from '../service/server.service';

@ApiTags('servers')
@Controller('servers')
export class ServerController {
  constructor(private serverService: ServerService) {}

  @Get()
  findServers(): Observable<ServerDto[]> {
    return this.serverService.findAll();
  }

  @Get(':id')
  findOneServer(@Param('id') id: string): Observable<ServerDto> {
    return this.serverService.findOne(id);
  }

  @ApiBearerAuth()
  @ApiBody({ type: [ServerCreateDto] })
  @Post()
  createServer(@Body() newServer: ServerCreateDto): Observable<ServerDto> {
    return this.serverService.createServer(newServer).pipe(
      map((createdServer) => {
        return createdServer;
      })
    );
  }

  @ApiBearerAuth()
  @ApiBody({ type: [ServerUpdateDto] })
  @Put(':id')
  updateServer(@Param('id') id: string, @Body() updatedServer: ServerUpdateDto): Observable<ServerDto> {
    return this.serverService.updateServer(id, updatedServer);
  }

  @ApiBearerAuth()
  @Delete(':id')
  deleteServer(@Param('id') id: string): Observable<ServerDto> {
    return this.serverService.deleteServer(id);
  }
}
