import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { Observable, map } from 'rxjs';
import { EmbyUserDto, EmbyUserCreateDto, EmbyUserUpdateDto } from '../models/emby-user.interface';
import { EmbyUserService } from '../service/emby-user.service';

@ApiTags('embyusers')
@Controller('embyusers')
export class EmbyUserController {
  constructor(private embyUserService: EmbyUserService) {}

  @Get()
  findEmbyUsers(): Observable<EmbyUserDto[]> {
    return this.embyUserService.findAll();
  }

  @Get(':id')
  findOneEmbyUser(@Param('id') id: string): Observable<EmbyUserDto> {
    return this.embyUserService.findOne(id);
  }

  @ApiBearerAuth()
  @ApiBody({ type: [EmbyUserCreateDto] })
  @Post()
  createEmbyUser(@Body() newEmbyUser: EmbyUserCreateDto): Observable<EmbyUserDto> {
    return this.embyUserService.createEmbyUser(newEmbyUser).pipe(
      map((createdEmbyUser) => {
        return createdEmbyUser;
      })
    );
  }

  @ApiBearerAuth()
  @ApiBody({ type: [EmbyUserUpdateDto] })
  @Put(':id')
  updateEmbyUser(@Param('id') id: string, @Body() updatedEmbyUser: EmbyUserUpdateDto): Observable<EmbyUserDto> {
    return this.embyUserService.updateEmbyUser(id, updatedEmbyUser);
  }

  @ApiBearerAuth()
  @Delete(':id')
  deleteEmbyUser(@Param('id') id: string): Observable<EmbyUserDto> {
    return this.embyUserService.deleteEmbyUser(id);
  }
}
