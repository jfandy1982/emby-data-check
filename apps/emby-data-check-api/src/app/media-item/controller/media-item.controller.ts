import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { Observable, map } from 'rxjs';
import { MediaItemDto, MediaItemCreateDto, MediaItemUpdateDto } from '../models/media-item.interface';
import { MediaItemService } from '../service/media-item.service';

@ApiTags('mediaitems')
@Controller('mediaitems')
export class MediaItemController {
  constructor(private mediaItemService: MediaItemService) {}

  @Get()
  findMediaItems(): Observable<MediaItemDto[]> {
    return this.mediaItemService.findAll();
  }

  @Get(':id')
  findOneMediaItem(@Param('id') id: string): Observable<MediaItemDto> {
    return this.mediaItemService.findOne(id);
  }

  @ApiBearerAuth()
  @ApiBody({ type: [MediaItemCreateDto] })
  @Post()
  createMediaItem(@Body() newMediaItem: MediaItemCreateDto): Observable<MediaItemDto> {
    // TODO: 'path' sollte die Server-Information nicht haben -> neutralisiert das Ganze dann
    // TODO: Bei den 'TagItems' (bei uns 'CustomTags') extrahieren wir nur die Strings, nicht die IDs etc.
    return this.mediaItemService.createMediaItem(newMediaItem).pipe(
      map((createdInstallation) => {
        return createdInstallation;
      })
    );
  }

  @ApiBearerAuth()
  @ApiBody({ type: [MediaItemUpdateDto] })
  @Put(':id')
  updateMediaItem(@Param('id') id: string, @Body() updatedMediaItem: MediaItemUpdateDto): Observable<MediaItemDto> {
    return this.mediaItemService.updateMediaItem(id, updatedMediaItem);
  }

  @ApiBearerAuth()
  @Delete(':id')
  deleteMediaItem(@Param('id') id: string): Observable<MediaItemDto> {
    return this.mediaItemService.deleteMediaItem(id);
  }
}
