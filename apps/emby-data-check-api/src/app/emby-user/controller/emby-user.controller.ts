import { Controller, Get, HttpStatus, Param, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiResponse, ApiParam } from '@nestjs/swagger';
import { Pagination } from 'nestjs-typeorm-paginate';
import { EmbyUserDto } from '../models/emby-user.interface';
import { EmbyUserService } from '../service/emby-user.service';

@ApiTags('embyusers')
@Controller('embyusers')
export class EmbyUserController {
  constructor(private embyUserService: EmbyUserService) {}

  @ApiBearerAuth()
  @ApiResponse({ isArray: true, status: HttpStatus.OK, description: 'List of Emby Users on Emby Server Installations' })
  @Get()
  async findAll(@Query('page') page = 1, @Query('limit') limit = 10): Promise<Pagination<EmbyUserDto>> {
    limit = limit > 100 ? 100 : limit;
    return this.embyUserService.findAll({ page, limit, route: 'http://localhost:3000/api/embyusers' });
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
  findOneEmbyUser(@Param('id') id: string): Promise<EmbyUserDto> {
    return this.embyUserService.findOne(id);
  }

  // @ApiBearerAuth()
  // @ApiBody({ type: [EmbyUserCreateDto] })
  // @Post()
  // createEmbyUser(@Body() newEmbyUser: EmbyUserCreateDto): Observable<EmbyUserDto> {
  //   return this.embyUserService.createEmbyUser(newEmbyUser).pipe(
  //     map((createdEmbyUser) => {
  //       return createdEmbyUser;
  //     })
  //   );
  // }

  // @ApiBearerAuth()
  // @ApiBody({ type: [EmbyUserUpdateDto] })
  // @Put(':id')
  // updateEmbyUser(@Param('id') id: string, @Body() updatedEmbyUser: EmbyUserUpdateDto): Observable<EmbyUserDto> {
  //   return this.embyUserService.updateEmbyUser(id, updatedEmbyUser);
  // }

  // @ApiBearerAuth()
  // @Delete(':id')
  // deleteEmbyUser(@Param('id') id: string): Observable<EmbyUserDto> {
  //   return this.embyUserService.deleteEmbyUser(id);
  // }
}
