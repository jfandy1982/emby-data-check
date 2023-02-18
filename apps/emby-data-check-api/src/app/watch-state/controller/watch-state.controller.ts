import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { Observable, map } from 'rxjs';
import { WatchStateDto, WatchStateCreateDto, WatchStateUpdateDto } from '../models/watch-state.interface';
import { WatchStateService } from '../service/watch-state.service';

@ApiTags('watchstates')
@Controller('watchstates')
export class WatchStateController {
  constructor(private watchStateService: WatchStateService) {}

  @Get()
  findWatchStates(): Observable<WatchStateDto[]> {
    return this.watchStateService.findAll();
  }

  @Get(':id')
  findOneWatchState(@Param('id') id: string): Observable<WatchStateDto> {
    return this.watchStateService.findOne(id);
  }

  @ApiBearerAuth()
  @ApiBody({ type: [WatchStateCreateDto] })
  @Post()
  createWatchState(@Body() newWatchState: WatchStateCreateDto): Observable<WatchStateDto> {
    return this.watchStateService.createWatchState(newWatchState).pipe(
      map((createdWatchState) => {
        return createdWatchState;
      })
    );
  }

  @ApiBearerAuth()
  @ApiBody({ type: [WatchStateUpdateDto] })
  @Put(':id')
  updateWatchState(@Param('id') id: string, @Body() updatedWatchState: WatchStateUpdateDto): Observable<WatchStateDto> {
    return this.watchStateService.updateWatchState(id, updatedWatchState);
  }

  @ApiBearerAuth()
  @Delete(':id')
  deleteWatchState(@Param('id') id: string): Observable<WatchStateDto> {
    return this.watchStateService.deleteWatchState(id);
  }
}
