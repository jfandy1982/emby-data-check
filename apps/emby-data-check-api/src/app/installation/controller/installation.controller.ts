import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { Pagination } from 'nestjs-typeorm-paginate';
import { DeleteResult } from 'typeorm';
import { InstallationCreateDto, InstallationDto } from '../models/installation.interface';
import { InstallationService } from '../service/installation.service';

@ApiTags('installations')
@Controller('installations')
export class InstallationController {
  constructor(private installationService: InstallationService) {}

  @ApiBearerAuth()
  @ApiResponse({ isArray: true, status: HttpStatus.OK, description: 'List of Emby Server Installations' })
  @Get()
  async findAllInstallations(@Query('page') page = 1, @Query('limit') limit = 10): Promise<Pagination<InstallationDto>> {
    limit = limit > 100 ? 100 : limit;
    return this.installationService.findAllInstallations({ page, limit, route: 'http://localhost:3000/api/installations' });
  }

  @ApiBearerAuth()
  @ApiResponse({ status: HttpStatus.OK, description: 'A single Emby Server Installation' })
  @ApiParam({
    name: 'id',
    description: 'ID of Emby Server Installation in Backup DB',
    required: true,
    example: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000',
  })
  @Get(':id')
  findOneInstallationById(@Param('id') id: string): Promise<InstallationDto> {
    return this.installationService.findOneInstallationById(id);
  }

  @ApiBearerAuth()
  @ApiBody({ type: [InstallationCreateDto] })
  @ApiResponse({ status: HttpStatus.OK, description: 'An Emby Server Installation saved in Backup DB' })
  @Post()
  async createNewInstallation(@Body() createInstallation: InstallationCreateDto): Promise<InstallationDto> {
    const newInstallation = this.createDtoToEntity(createInstallation);
    return this.installationService.createNewInstallation(newInstallation);
  }

  @ApiBearerAuth()
  @ApiResponse({ status: HttpStatus.OK, description: 'An Emby Server Installation deleted from Backup DB' })
  @ApiParam({
    name: 'id',
    description: 'ID of Emby Server Installation in Backup DB',
    required: true,
    example: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000',
  })
  @Delete(':id')
  async deleteInstallation(@Param('id') id: string): Promise<DeleteResult> {
    return this.installationService.deleteInstallation(id);
  }

  private createDtoToEntity(createDto: InstallationCreateDto): InstallationDto {
    return {
      embyServerId: createDto.embyServerId,
      isActive: createDto.isActive,
      server: createDto.server,
    };
  }
}
