import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { Repository } from 'typeorm';
import { WatchStateEntity } from '../models/watch-state.entity';
import { WatchStateDto } from '../models/watch-state.interface';

@Injectable()
export class WatchStateService {
  constructor(
    @InjectRepository(WatchStateEntity)
    private readonly watchStateRepository: Repository<WatchStateEntity>
  ) {}

  async findAll(options: IPaginationOptions): Promise<Pagination<WatchStateDto>> {
    return paginate<WatchStateEntity>(this.watchStateRepository, options, { relations: ['embyUser', 'mediaItem'] });
  }

  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // async deleteWatchState(id: string): Promise<any> {
  //   return this.watchStateRepository.delete(id);
  // }
  // async findOne(id: string): Promise<WatchStateDto> {
  //   return this.watchStateRepository.findOne({
  //     relations: ['embyUser', 'mediaItem'],
  //     where: { id },
  //   });
  // }

  // async createWatchState(newWatchState: WatchStateCreateDto): Promise<WatchStateDto> {
  //   try {
  //     const watchState = await this.watchStateRepository.save(this.watchStateRepository.create(newWatchState));
  //     return this.findOne(watchState.id);
  //   } catch (error) {
  //     throw new HttpException('Some error in WatchStateService - CREATE', HttpStatus.CONFLICT);
  //   }
  // }

  // async updateWatchState(id: string, updatedWatchState: WatchStateUpdateDto): Promise<WatchStateDto> {
  //   try {
  //     // TODO: Find the existing record...
  //     const watchState = await this.watchStateRepository.save(this.watchStateRepository.update(updatedWatchState));
  //     return this.findOne(watchState[0].id);
  //   } catch (error) {
  //     throw new HttpException('Some error in WatchStateService - UPDATE', HttpStatus.CONFLICT);
  //   }
  // }

  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // async deleteWatchState(id: string): Promise<any> {
  //   return this.watchStateRepository.delete(id);
  // }
}
