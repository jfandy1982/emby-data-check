import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from, map, switchMap } from 'rxjs';
import { Repository } from 'typeorm';
import { WatchStatesMapper } from '../../utils/mapper/watch-statesMapper';
import { WatchStateEntity } from '../models/watch-state.entity';
import { WatchStateDto, WatchStateCreateDto, WatchStateUpdateDto } from '../models/watch-state.interface';

@Injectable()
export class WatchStateService {
  constructor(
    @InjectRepository(WatchStateEntity)
    private readonly watchStateRepository: Repository<WatchStateEntity>
  ) {}

  findAll(): Observable<WatchStateDto[]> {
    return from(this.watchStateRepository.find({ relations: ['embyUser', 'mediaItem'] })).pipe(
      map((watchStates) => {
        return WatchStatesMapper.mapWatchStateEntitiesToDtos(watchStates);
      })
    );
  }

  findOne(id: string): Observable<WatchStateDto> {
    return from(
      this.watchStateRepository.findOne({
        relations: ['embyUser', 'mediaItem'],
        where: { id },
      })
    ).pipe(
      map((watchState) => {
        if (watchState) {
          return WatchStatesMapper.mapWatchStateEntityToDto(watchState);
        } else {
          throw new NotFoundException(`WatchState with ID [${id}] not found`);
        }
      })
    );
  }

  createWatchState(newWatchState: WatchStateCreateDto): Observable<WatchStateDto> {
    return from(this.watchStateRepository.save(newWatchState)).pipe(
      map((createdWatchState) => {
        return WatchStatesMapper.mapWatchStateEntityToDto(createdWatchState);
      })
    );
  }

  updateWatchState(id: string, updatedWatchState: WatchStateUpdateDto): Observable<WatchStateDto> {
    return from(this.watchStateRepository.update(id, updatedWatchState)).pipe(switchMap(() => this.findOne(id)));
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  deleteWatchState(id: string): Observable<any> {
    return from(this.watchStateRepository.delete(id));
  }
}
