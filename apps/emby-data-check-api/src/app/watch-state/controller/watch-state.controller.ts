import { Body, Controller, Delete, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';
import { EmbyUserDbService } from '../../emby-user/service/emby-user-db.service';
import { ServerDbService } from '../../server/service/server-db.service';
import { PublicWatchStatesEmbyDto } from '../models/watch-state-emby.interface';
import { WatchStateCreateDto, WatchStateDto } from '../models/watch-state.interface';
import { WatchStateDbService } from '../service/watch-state-db.service';
import { WatchStateHttpService } from '../service/watch-state-http.service';

@ApiTags('watchstates')
@Controller('watchstates')
export class WatchStateController {
  constructor(
    private watchStateDbService: WatchStateDbService,
    private watchStateHttpService: WatchStateHttpService,
    private serverDbService: ServerDbService,
    private embyUserDbService: EmbyUserDbService
  ) {}

  @ApiBearerAuth()
  @ApiResponse({ isArray: true, status: HttpStatus.OK, description: 'List of Watchstates' })
  @Get('db')
  async findAllWatchStates(): Promise<WatchStateDto[]> {
    return this.watchStateDbService.findAllWatchStates();
  }

  @ApiBearerAuth()
  @ApiResponse({ status: HttpStatus.OK, description: 'A single Watchstate' })
  @ApiParam({ name: 'id', description: 'ID of Watchstate in Backup DB', required: true, example: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000' })
  @Get('db/:id')
  findOneWatchStateById(@Param('id') id: string): Promise<WatchStateDto> {
    return this.watchStateDbService.findOneWatchStateById(id);
  }

  @ApiBearerAuth()
  @ApiResponse({ isArray: true, status: HttpStatus.OK, description: 'List of Media Items' })
  @Get('emby/:serverid/:embyuserid')
  async findAllWatchStatesForUser(
    @Param('serverid') serverid: string,
    @Param('embyuserid') embyuserid: string
  ): Promise<PublicWatchStatesEmbyDto> {
    const foundServer = await this.serverDbService.findOneServerById(serverid);
    const foundEmbyUser = await this.embyUserDbService.findOneEmbyUserById(embyuserid);

    return this.watchStateHttpService.findAllWatchStatesForUser(foundServer, foundEmbyUser);
  }

  @ApiBearerAuth()
  @ApiBody({ type: [WatchStateCreateDto] })
  @ApiResponse({ status: HttpStatus.OK, description: 'A Watchstate saved in Backup DB' })
  @Post('db')
  async createNewWatchState(@Body() createWatchState: WatchStateCreateDto): Promise<WatchStateDto> {
    const newWatchState = this.createDtoToEntity(createWatchState);
    return this.watchStateDbService.createNewWatchState(newWatchState);
  }

  @ApiBearerAuth()
  @ApiResponse({ status: HttpStatus.OK, description: 'A Watchstate deleted from Backup DB' })
  @ApiParam({ name: 'id', description: 'ID of Watchstate in Backup DB', required: true, example: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000' })
  @Delete('db/:id')
  async deleteWatchState(@Param('id') id: string): Promise<DeleteResult> {
    return this.watchStateDbService.deleteWatchState(id);
  }

  private createDtoToEntity(createDto: WatchStateCreateDto): WatchStateDto {
    return {
      mediaItem: createDto.mediaItem,
      embyUser: createDto.embyUser,
      isWatched: createDto.isWatched,
      lastWatchedAt: createDto.lastWatchedAt,
    };
  }
}
