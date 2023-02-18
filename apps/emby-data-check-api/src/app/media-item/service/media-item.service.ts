import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from, map, switchMap } from 'rxjs';
import { Repository } from 'typeorm';
import { MediaItemsMapper } from '../../utils/mapper/mediaItemsMapper';
import { MediaItemEntity } from '../models/media-item.entity';
import { MediaItemDto, MediaItemCreateDto, MediaItemUpdateDto } from '../models/media-item.interface';

@Injectable()
export class MediaItemService {
  constructor(
    @InjectRepository(MediaItemEntity)
    private readonly mediaItemRepository: Repository<MediaItemEntity>
  ) {}

  findAll(): Observable<MediaItemDto[]> {
    return from(
      this.mediaItemRepository.find({
        relations: ['watchStates'],
      })
    ).pipe(
      map((mediaItems) => {
        return MediaItemsMapper.mapMediaItemEntitiesToDtos(mediaItems);
      })
    );
  }

  findOne(id: string): Observable<MediaItemDto> {
    return from(
      this.mediaItemRepository.findOne({
        relations: ['watchStates'],
        where: { id },
      })
    ).pipe(
      map((mediaItem) => {
        if (mediaItem) {
          return MediaItemsMapper.mapMediaItemEntityToDto(mediaItem);
        } else {
          throw new NotFoundException(`Media Item with ID [${id}] not found`);
        }
      })
    );
  }

  createMediaItem(newMediaItem: MediaItemCreateDto): Observable<MediaItemDto> {
    return from(this.mediaItemRepository.save(newMediaItem)).pipe(
      map((createdMediaItem) => {
        return MediaItemsMapper.mapMediaItemEntityToDto(createdMediaItem);
      })
    );
  }

  updateMediaItem(id: string, updatedMediaItem: MediaItemUpdateDto): Observable<MediaItemDto> {
    return from(this.mediaItemRepository.update(id, updatedMediaItem)).pipe(
      switchMap(() => {
        return this.findOne(id);
      })
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  deleteMediaItem(id: string): Observable<any> {
    return from(this.mediaItemRepository.delete(id));
  }
}
