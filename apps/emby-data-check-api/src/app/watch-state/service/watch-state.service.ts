import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { DeleteResult, Repository } from 'typeorm';
import { WatchStateEntity } from '../models/watch-state.entity';
import { WatchStateDto } from '../models/watch-state.interface';

@Injectable()
export class WatchStateService {
  constructor(
    @InjectRepository(WatchStateEntity)
    private readonly watchStateRepository: Repository<WatchStateEntity>
  ) {}

  async findAllWatchStates(options: IPaginationOptions): Promise<Pagination<WatchStateDto>> {
    return paginate<WatchStateEntity>(this.watchStateRepository, options, { relations: ['embyUser', 'mediaItem'] });
  }

  async findOneWatchStateById(id: string): Promise<WatchStateDto> {
    if (id) {
      return this.watchStateRepository.findOne({
        relations: ['embyUser', 'mediaItem'],
        where: { id },
      });
    } else {
      throw new BadRequestException('Bad Request');
    }
  }

  async createNewWatchState(newWatchState: WatchStateDto): Promise<WatchStateDto> {
    try {
      const createdWatchState = await this.watchStateRepository.save(this.watchStateRepository.create(newWatchState));
      return this.findOneWatchStateById(createdWatchState.id);
    } catch {
      throw new BadRequestException('Bad Request');
    }
  }

  async deleteWatchState(id: string): Promise<DeleteResult> {
    return this.watchStateRepository.delete(id);
  }
}
