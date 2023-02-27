import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { DeleteResult, Repository } from 'typeorm';
import { MediaItemEntity } from '../models/media-item.entity';
import { MediaItemDto } from '../models/media-item.interface';

@Injectable()
export class MediaItemDbService {
  constructor(
    @InjectRepository(MediaItemEntity)
    private readonly mediaItemRepository: Repository<MediaItemEntity>
  ) {}

  async findAllMediaItems(options: IPaginationOptions): Promise<Pagination<MediaItemDto>> {
    return paginate<MediaItemEntity>(this.mediaItemRepository, options, { relations: ['watchStates'] });
  }

  async findOneMediaItemById(id: string): Promise<MediaItemDto> {
    if (id) {
      return this.mediaItemRepository.findOne({
        relations: ['watchStates'],
        where: { id },
      });
    } else {
      throw new BadRequestException('Bad Request');
    }
  }

  async createNewMediaItem(newMediaItem: MediaItemDto): Promise<MediaItemDto> {
    try {
      const createdMediaItem = await this.mediaItemRepository.save(this.mediaItemRepository.create(newMediaItem));
      return this.findOneMediaItemById(createdMediaItem.id);
    } catch {
      throw new BadRequestException('Bad Request');
    }
  }

  async deleteMediaItem(id: string): Promise<DeleteResult> {
    return this.mediaItemRepository.delete(id);
  }
}
