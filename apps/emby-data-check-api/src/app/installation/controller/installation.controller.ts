import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';
import { ServerDbService } from '../../server/service/server-db.service';
import { InstallationInfoDto } from '../models/installation-emby.interface';
import { InstallationCreateDto, InstallationDto, InstallationUpdateDto } from '../models/installation.interface';
import { InstallationDbService } from '../service/installation-db.service';
import { InstallationHttpService } from '../service/installation-http.service';

@ApiTags('installations')
@Controller('installations')
export class InstallationController {
  constructor(
    private installationDbService: InstallationDbService,
    private installationHttpService: InstallationHttpService,
    private serverDbService: ServerDbService
  ) {}

  @ApiBearerAuth()
  @ApiResponse({ isArray: true, status: HttpStatus.OK, description: 'List of Emby Server Installations' })
  @Get('db')
  async findAllInstallations(): Promise<InstallationDto[]> {
    return this.installationDbService.findAllInstallations();
  }

  @ApiBearerAuth()
  @ApiResponse({ status: HttpStatus.OK, description: 'A single Emby Server Installation' })
  @ApiParam({
    name: 'id',
    description: 'ID of Emby Server Installation in Backup DB',
    required: true,
    example: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000',
  })
  @Get('db/:id')
  findOneInstallationById(@Param('id') id: string): Promise<InstallationDto> {
    return this.installationDbService.findOneInstallationById(id);
  }

  @ApiBearerAuth()
  @ApiResponse({ status: HttpStatus.OK, description: 'A single Server' })
  @ApiParam({
    name: 'serverid',
    description: 'ID of Server in Backup DB',
    required: true,
    example: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000',
  })
  @Get('emby/:serverid')
  async getInstallationDetailsForServer(@Param('serverid') serverid: string): Promise<InstallationInfoDto> {
    const foundServer = await this.serverDbService.findOneServerById(serverid);
    return this.installationHttpService.getInstallationDetails(foundServer);
  }

  @ApiBearerAuth()
  @ApiBody({ type: [InstallationCreateDto] })
  @ApiResponse({ status: HttpStatus.OK, description: 'An Emby Server Installation saved in Backup DB' })
  @Post('db')
  async createNewInstallation(@Body() createInstallation: InstallationCreateDto): Promise<InstallationDto> {
    const newInstallation = this.createDtoToEntity(createInstallation);
    return this.installationDbService.createNewInstallation(newInstallation);
  }

  @ApiBearerAuth()
  @ApiBody({ type: [InstallationUpdateDto] })
  @ApiResponse({ status: HttpStatus.OK, description: 'An Emby Server Installation saved in Backup DB' })
  @Put('db/:id')
  async updateExistingInstallation(@Param('id') id: string, @Body() updateInstallation: InstallationUpdateDto): Promise<InstallationDto> {
    const existingInstallation = await this.installationDbService.findOneInstallationById(id);
    existingInstallation.isActive = updateInstallation.isActive;
    return this.installationDbService.updateExistingInstallation(existingInstallation);
  }

  @ApiBearerAuth()
  @ApiResponse({ status: HttpStatus.OK, description: 'An Emby Server Installation deleted from Backup DB' })
  @ApiParam({
    name: 'id',
    description: 'ID of Emby Server Installation in Backup DB',
    required: true,
    example: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000',
  })
  @Delete('db/:id')
  async deleteInstallation(@Param('id') id: string): Promise<DeleteResult> {
    return this.installationDbService.deleteInstallation(id);
  }

  private createDtoToEntity(createDto: InstallationCreateDto): InstallationDto {
    return {
      embyServerId: createDto.embyServerId,
      isActive: createDto.isActive,
      server: createDto.server,
    };
  }
}
