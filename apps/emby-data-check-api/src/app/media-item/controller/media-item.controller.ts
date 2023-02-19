import { Controller, Get, HttpStatus, Param, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiResponse, ApiParam } from '@nestjs/swagger';
import { Pagination } from 'nestjs-typeorm-paginate';
import { MediaItemDto } from '../models/media-item.interface';
import { MediaItemService } from '../service/media-item.service';

@ApiTags('mediaitems')
@Controller('mediaitems')
export class MediaItemController {
  constructor(private mediaItemService: MediaItemService) {}

  @ApiBearerAuth()
  @ApiResponse({ isArray: true, status: HttpStatus.OK, description: 'List of Media Items' })
  @Get()
  async findAll(@Query('page') page = 1, @Query('limit') limit = 10): Promise<Pagination<MediaItemDto>> {
    limit = limit > 100 ? 100 : limit;
    return this.mediaItemService.findAll({ page, limit, route: 'http://localhost:3000/api/mediaitems' });
  }

  @ApiBearerAuth()
  @ApiResponse({ status: HttpStatus.OK, description: 'A single Media Item' })
  @ApiParam({ name: 'id', description: 'ID of Media Item in Backup DB', required: true, example: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000' })
  @Get(':id')
  findOneMediaItem(@Param('id') id: string): Promise<MediaItemDto> {
    return this.mediaItemService.findOne(id);
  }

  // @ApiBearerAuth()
  // @ApiBody({ type: [MediaItemCreateDto] })
  // @Post()
  // createMediaItem(@Body() newMediaItem: MediaItemCreateDto): Observable<MediaItemDto> {
  //   // TODO: 'path' sollte die Server-Information nicht haben -> neutralisiert das Ganze dann
  //   // TODO: Bei den 'TagItems' (bei uns 'CustomTags') extrahieren wir nur die Strings, nicht die IDs etc.
  //   return this.mediaItemService.createMediaItem(newMediaItem).pipe(
  //     map((createdInstallation) => {
  //       return createdInstallation;
  //     })
  //   );
  // }

  // @ApiBearerAuth()
  // @ApiBody({ type: [MediaItemUpdateDto] })
  // @Put(':id')
  // updateMediaItem(@Param('id') id: string, @Body() updatedMediaItem: MediaItemUpdateDto): Observable<MediaItemDto> {
  //   return this.mediaItemService.updateMediaItem(id, updatedMediaItem);
  // }

  // @ApiBearerAuth()
  // @Delete(':id')
  // deleteMediaItem(@Param('id') id: string): Observable<MediaItemDto> {
  //   return this.mediaItemService.deleteMediaItem(id);
  // }
}
