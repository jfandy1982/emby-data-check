import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { Pagination } from 'nestjs-typeorm-paginate';
import { DeleteResult } from 'typeorm';
import { WatchStateCreateDto, WatchStateDto } from '../models/watch-state.interface';
import { WatchStateDbService } from '../service/watch-state-db.service';
import { WatchStateHttpService } from '../service/watch-state-http.service';

@ApiTags('watchstates')
@Controller('watchstates')
export class WatchStateController {
  constructor(private watchStateDbService: WatchStateDbService, private watchStateHttpService: WatchStateHttpService) {}

  @ApiBearerAuth()
  @ApiResponse({ isArray: true, status: HttpStatus.OK, description: 'List of Watchstates' })
  @Get()
  async findAllWatchStates(@Query('page') page = 1, @Query('limit') limit = 10): Promise<Pagination<WatchStateDto>> {
    limit = limit > 100 ? 100 : limit;
    return this.watchStateDbService.findAllWatchStates({ page, limit, route: 'http://localhost:3000/api/watchstates' });
  }

  @ApiBearerAuth()
  @ApiResponse({ status: HttpStatus.OK, description: 'A single Watchstate' })
  @ApiParam({ name: 'id', description: 'ID of Watchstate in Backup DB', required: true, example: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000' })
  @Get(':id')
  findOneWatchStateById(@Param('id') id: string): Promise<WatchStateDto> {
    return this.watchStateDbService.findOneWatchStateById(id);
  }

  @ApiBearerAuth()
  @ApiBody({ type: [WatchStateCreateDto] })
  @ApiResponse({ status: HttpStatus.OK, description: 'A Watchstate saved in Backup DB' })
  @Post()
  async createNewWatchState(@Body() createWatchState: WatchStateCreateDto): Promise<WatchStateDto> {
    const newWatchState = this.createDtoToEntity(createWatchState);
    return this.watchStateDbService.createNewWatchState(newWatchState);
  }

  @ApiBearerAuth()
  @ApiResponse({ status: HttpStatus.OK, description: 'A Watchstate deleted from Backup DB' })
  @ApiParam({ name: 'id', description: 'ID of Watchstate in Backup DB', required: true, example: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000' })
  @Delete(':id')
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
