import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';
import { UserDbService } from '../../user/service/user-db.service';
import { ServerDbService } from '../../server/service/server-db.service';
import { EmbyUserInfoDto } from '../models/emby-user-emby.interface';
import { EmbyUserCreateDto, EmbyUserDto, EmbyUserUpdateDto } from '../models/emby-user.interface';
import { EmbyUserDbService } from '../service/emby-user-db.service';
import { EmbyUserHttpService } from '../service/emby-user-http.service';

@ApiTags('embyusers')
@Controller('embyusers')
export class EmbyUserController {
  constructor(
    private embyUserDbService: EmbyUserDbService,
    private embyUserHttpService: EmbyUserHttpService,
    private userDbService: UserDbService,
    private serverDbService: ServerDbService
  ) {}

  @ApiBearerAuth()
  @ApiResponse({ isArray: true, status: HttpStatus.OK, description: 'List of Emby Users on Emby Server Installations' })
  @Get('db')
  async findAllEmbyUsers(): Promise<EmbyUserDto[]> {
    return this.embyUserDbService.findAllEmbyUsers();
  }

  @ApiBearerAuth()
  @ApiResponse({ status: HttpStatus.OK, description: 'A single Emby User on Emby Server Installation' })
  @ApiParam({
    name: 'id',
    description: 'ID of Emby User in Backup DB',
    required: true,
    example: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000',
  })
  @Get('db/:id')
  findOneEmbyUserById(@Param('id') id: string): Promise<EmbyUserDto> {
    return this.embyUserDbService.findOneEmbyUserById(id);
  }

  @ApiBearerAuth()
  @ApiResponse({ status: HttpStatus.OK, description: 'A single Server' })
  @ApiParam({
    name: 'userid',
    description: 'ID of User in Backup DB',
    required: true,
    example: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000',
  })
  @ApiParam({
    name: 'serverid',
    description: 'ID of Server in Backup DB',
    required: true,
    example: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000',
  })
  @Get('emby/:userid/:serverid')
  async getEmbyUserDetailsForUser(@Param('userid') userid: string, @Param('serverid') serverid: string): Promise<EmbyUserInfoDto> {
    const foundUser = await this.userDbService.findOneUserById(userid);
    const foundServer = await this.serverDbService.findOneServerById(serverid);
    return await this.embyUserHttpService.getEmbyUserDetails(foundUser, foundServer);
  }

  @ApiBearerAuth()
  @ApiBody({ type: [EmbyUserCreateDto] })
  @ApiResponse({ status: HttpStatus.OK, description: 'An Emby User saved in Backup DB' })
  @Post('db')
  async createNewEmbyUser(@Body() createEmbyUser: EmbyUserCreateDto): Promise<EmbyUserDto> {
    const newEmbyUser = this.createDtoToEntity(createEmbyUser);
    return this.embyUserDbService.createNewEmbyUser(newEmbyUser);
  }

  @ApiBearerAuth()
  @ApiBody({ type: [EmbyUserUpdateDto] })
  @ApiResponse({ status: HttpStatus.OK, description: 'An Emby User saved in Backup DB' })
  @Put('db/:id')
  async updateExistingEmbyUser(@Param('id') id: string, @Body() updateEmbyUser: EmbyUserUpdateDto): Promise<EmbyUserDto> {
    const existingEmbyUser = await this.embyUserDbService.findOneEmbyUserById(id);
    existingEmbyUser.isActive = updateEmbyUser.isActive;
    return this.embyUserDbService.updateExistingEmbyUser(existingEmbyUser);
  }

  @ApiBearerAuth()
  @ApiResponse({ status: HttpStatus.OK, description: 'An Emby User deleted from Backup DB' })
  @ApiParam({
    name: 'id',
    description: 'ID of Emby User in Backup DB',
    required: true,
    example: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000',
  })
  @Delete('db/:id')
  async deleteEmbyUser(@Param('id') id: string): Promise<DeleteResult> {
    return this.embyUserDbService.deleteEmbyUser(id);
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
