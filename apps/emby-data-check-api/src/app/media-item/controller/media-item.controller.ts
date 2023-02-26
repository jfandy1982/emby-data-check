import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { Pagination } from 'nestjs-typeorm-paginate';
import { DeleteResult } from 'typeorm';
import { MediaItemCreateDto, MediaItemDto } from '../models/media-item.interface';
import { MediaItemDbService } from '../service/media-item-db.service';

@ApiTags('mediaitems')
@Controller('mediaitems')
export class MediaItemController {
  constructor(private mediaItemDbService: MediaItemDbService) {}

  @ApiBearerAuth()
  @ApiResponse({ isArray: true, status: HttpStatus.OK, description: 'List of Media Items' })
  @Get()
  async findAllMediaItems(@Query('page') page = 1, @Query('limit') limit = 10): Promise<Pagination<MediaItemDto>> {
    limit = limit > 100 ? 100 : limit;
    return this.mediaItemDbService.findAllMediaItems({ page, limit, route: 'http://localhost:3000/api/mediaitems' });
  }

  @ApiBearerAuth()
  @ApiResponse({ status: HttpStatus.OK, description: 'A single Media Item' })
  @ApiParam({ name: 'id', description: 'ID of Media Item in Backup DB', required: true, example: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000' })
  @Get(':id')
  findOneMediaItemById(@Param('id') id: string): Promise<MediaItemDto> {
    return this.mediaItemDbService.findOneMediaItemById(id);
  }

  @ApiBearerAuth()
  @ApiBody({ type: [MediaItemCreateDto] })
  @ApiResponse({ status: HttpStatus.OK, description: 'A Media Item saved in Backup DB' })
  @Post()
  async createNewMediaItem(@Body() createMediaItem: MediaItemCreateDto): Promise<MediaItemDto> {
    // TODO: 'path' sollte die Server-Information nicht haben -> neutralisiert das Ganze dann
    // TODO: Bei den 'TagItems' (bei uns 'CustomTags') extrahieren wir nur die Strings, nicht die IDs etc.
    const newMediaItem = this.createDtoToEntity(createMediaItem);
    return this.mediaItemDbService.createNewMediaItem(newMediaItem);
  }

  @ApiBearerAuth()
  @ApiResponse({ status: HttpStatus.OK, description: 'A Media Item deleted from Backup DB' })
  @ApiParam({ name: 'id', description: 'ID of Media Item in Backup DB', required: true, example: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000' })
  @Delete(':id')
  async deleteMediaItem(@Param('id') id: string): Promise<DeleteResult> {
    return this.mediaItemDbService.deleteMediaItem(id);
  }

  private createDtoToEntity(createDto: MediaItemCreateDto): MediaItemDto {
    // TODO: Replace assignment of 'itemNameSlug' to slugified value from Path & Display Name
    return {
      customTags: createDto.customTags,
      displayName: createDto.displayName,
      itemNameSlug: createDto.displayName,
      path: createDto.path,
      providerId: createDto.providerId,
      providerType: createDto.providerType,
      type: createDto.type,
    };
  }
}
