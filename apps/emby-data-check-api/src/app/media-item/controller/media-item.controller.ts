import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { Pagination } from 'nestjs-typeorm-paginate';
import { DeleteResult } from 'typeorm';
import { MediaItemCreateDto, MediaItemDto } from '../models/media-item.interface';
import { MediaItemDbService } from '../service/media-item-db.service';
import { ServerDbService } from '../../server/service/server-db.service';
import { MediaItemHttpService } from '../service/media-item-http.service';
import { PublicItemsEmbyDto } from '../models/media-item-emby.interface';

@ApiTags('mediaitems')
@Controller('mediaitems')
export class MediaItemController {
  constructor(
    private mediaItemDbService: MediaItemDbService,
    private mediaItemHttpService: MediaItemHttpService,
    private serverDbService: ServerDbService
  ) {}

  @ApiBearerAuth()
  @ApiResponse({ isArray: true, status: HttpStatus.OK, description: 'List of Media Items' })
  @Get('db')
  async findAllMediaItems(): Promise<MediaItemDto[]> {
    return this.mediaItemDbService.findAllMediaItems();
  }

  @ApiBearerAuth()
  @ApiResponse({ status: HttpStatus.OK, description: 'A single Media Item' })
  @ApiParam({ name: 'id', description: 'ID of Media Item in Backup DB', required: true, example: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000' })
  @Get('db/:id')
  findOneMediaItemById(@Param('id') id: string): Promise<MediaItemDto> {
    return this.mediaItemDbService.findOneMediaItemById(id);
  }

  @ApiBearerAuth()
  @ApiResponse({ isArray: true, status: HttpStatus.OK, description: 'List of Media Items' })
  @Get('emby-itemtypes/:serverid')
  async findAllUsedMediaItemTypes(@Param('serverid') serverid: string): Promise<string[]> {
    const foundServer = await this.serverDbService.findOneServerById(serverid);
    return this.mediaItemHttpService.findAllUsedMediaItemTypes(foundServer);
  }

  @ApiBearerAuth()
  @ApiResponse({ isArray: true, status: HttpStatus.OK, description: 'List of Media Items' })
  @Get('emby/:serverid')
  async findAllMediaItemsOnInstallation(
    @Param('serverid') serverid: string,
    @Query('missing') missing = false
  ): Promise<PublicItemsEmbyDto> {
    const foundServer = await this.serverDbService.findOneServerById(serverid);
    return this.mediaItemHttpService.findAllMediaItemsOnInstallation(foundServer, missing);
  }

  @ApiBearerAuth()
  @ApiBody({ type: [MediaItemCreateDto] })
  @ApiResponse({ status: HttpStatus.OK, description: 'A Media Item saved in Backup DB' })
  @Post('db')
  async createNewMediaItem(@Body() createMediaItem: MediaItemCreateDto): Promise<MediaItemDto> {
    // TODO: 'path' sollte die Server-Information nicht haben -> neutralisiert das Ganze dann
    // TODO: Bei den 'TagItems' (bei uns 'CustomTags') extrahieren wir nur die Strings, nicht die IDs etc.
    const newMediaItem = this.createDtoToEntity(createMediaItem);
    return this.mediaItemDbService.createNewMediaItem(newMediaItem);
  }

  @ApiBearerAuth()
  @ApiResponse({ status: HttpStatus.OK, description: 'A Media Item deleted from Backup DB' })
  @ApiParam({ name: 'id', description: 'ID of Media Item in Backup DB', required: true, example: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000' })
  @Delete('db/:id')
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
