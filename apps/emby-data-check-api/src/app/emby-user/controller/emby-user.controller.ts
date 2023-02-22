import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { Pagination } from 'nestjs-typeorm-paginate';
import { DeleteResult } from 'typeorm';
import { EmbyUserCreateDto, EmbyUserDto } from '../models/emby-user.interface';
import { EmbyUserService } from '../service/emby-user.service';

@ApiTags('embyusers')
@Controller('embyusers')
export class EmbyUserController {
  constructor(private embyUserService: EmbyUserService) {}

  @ApiBearerAuth()
  @ApiResponse({ isArray: true, status: HttpStatus.OK, description: 'List of Emby Users on Emby Server Installations' })
  @Get()
  async findAllEmbyUsers(@Query('page') page = 1, @Query('limit') limit = 10): Promise<Pagination<EmbyUserDto>> {
    limit = limit > 100 ? 100 : limit;
    return this.embyUserService.findAllEmbyUsers({ page, limit, route: 'http://localhost:3000/api/embyusers' });
  }

  @ApiBearerAuth()
  @ApiResponse({ status: HttpStatus.OK, description: 'A single Emby User on Emby Server Installation' })
  @ApiParam({
    name: 'id',
    description: 'ID of Emby User in Backup DB',
    required: true,
    example: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000',
  })
  @Get(':id')
  findOneEmbyUserById(@Param('id') id: string): Promise<EmbyUserDto> {
    return this.embyUserService.findOneEmbyUserById(id);
  }

  @ApiBearerAuth()
  @ApiBody({ type: [EmbyUserCreateDto] })
  @ApiResponse({ status: HttpStatus.OK, description: 'An Emby User saved in Backup DB' })
  @Post()
  async createNewEmbyUser(@Body() createEmbyUser: EmbyUserCreateDto): Promise<EmbyUserDto> {
    const newEmbyUser = this.createDtoToEntity(createEmbyUser);
    return this.embyUserService.createNewEmbyUser(newEmbyUser);
  }

  // @ApiBearerAuth()
  // @ApiBody({ type: [EmbyUserUpdateDto] })
  // @Put(':id')
  // updateEmbyUser(@Param('id') id: string, @Body() updatedEmbyUser: EmbyUserUpdateDto): Observable<EmbyUserDto> {
  //   return this.embyUserService.updateEmbyUser(id, updatedEmbyUser);
  // }

  @ApiBearerAuth()
  @ApiResponse({ status: HttpStatus.OK, description: 'An Emby User deleted from Backup DB' })
  @ApiParam({
    name: 'id',
    description: 'ID of Emby User in Backup DB',
    required: true,
    example: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000',
  })
  @Delete(':id')
  async deleteEmbyUser(@Param('id') id: string): Promise<DeleteResult> {
    return this.embyUserService.deleteEmbyUser(id);
  }

  private createDtoToEntity(createDto: EmbyUserCreateDto): EmbyUserDto {
    return {
      embyUserId: createDto.embyUserId,
      installation: createDto.installation,
      isActive: createDto.isActive,
      user: createDto.user,
    };
  }
}
