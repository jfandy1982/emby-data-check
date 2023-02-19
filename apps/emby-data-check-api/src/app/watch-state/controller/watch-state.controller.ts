import { Controller, Get, HttpStatus, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { Pagination } from 'nestjs-typeorm-paginate';
import { WatchStateDto } from '../models/watch-state.interface';
import { WatchStateService } from '../service/watch-state.service';

@ApiTags('watchstates')
@Controller('watchstates')
export class WatchStateController {
  constructor(private watchStateService: WatchStateService) {}

  @ApiBearerAuth()
  @ApiResponse({ isArray: true, status: HttpStatus.OK, description: 'List of Watchstates' })
  @Get()
  async findAll(@Query('page') page = 1, @Query('limit') limit = 10): Promise<Pagination<WatchStateDto>> {
    limit = limit > 100 ? 100 : limit;
    return this.watchStateService.findAll({ page, limit, route: 'http://localhost:3000/api/watchstates' });
  }

  // @Get(':id')
  // findOneWatchState(@Param('id') id: string): Observable<WatchStateDto> {
  //   return this.watchStateService.findOne(id);
  // }

  // @ApiBearerAuth()
  // @ApiBody({ type: [WatchStateCreateDto] })
  // @Post()
  // createWatchState(@Body() newWatchState: WatchStateCreateDto): Observable<WatchStateDto> {
  //   return this.watchStateService.createWatchState(newWatchState).pipe(
  //     map((createdWatchState) => {
  //       return createdWatchState;
  //     })
  //   );
  // }

  // @ApiBearerAuth()
  // @ApiBody({ type: [WatchStateUpdateDto] })
  // @Put(':id')
  // updateWatchState(@Param('id') id: string, @Body() updatedWatchState: WatchStateUpdateDto): Observable<WatchStateDto> {
  //   return this.watchStateService.updateWatchState(id, updatedWatchState);
  // }

  // @ApiBearerAuth()
  // @Delete(':id')
  // async deleteWatchState(@Param('id') id: string): Promise<WatchStateDto> {
  //   return this.watchStateService.deleteWatchState(id);
  // }
}
