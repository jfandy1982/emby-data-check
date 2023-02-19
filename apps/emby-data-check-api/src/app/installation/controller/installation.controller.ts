import { Controller, Get, HttpStatus, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { Pagination } from 'nestjs-typeorm-paginate';
import { InstallationDto } from '../models/installation.interface';
import { InstallationService } from '../service/installation.service';

@ApiTags('installations')
@Controller('installations')
export class InstallationController {
  constructor(private installationService: InstallationService) {}

  @ApiBearerAuth()
  @ApiResponse({ isArray: true, status: HttpStatus.OK, description: 'List of Emby Server Installations' })
  @Get()
  async findAll(@Query('page') page = 1, @Query('limit') limit = 10): Promise<Pagination<InstallationDto>> {
    limit = limit > 100 ? 100 : limit;
    return this.installationService.findAll({ page, limit, route: 'http://localhost:3000/api/installations' });
  }

  // @Get(':id')
  // findOneInstallation(@Param('id') id: string): Observable<InstallationDto> {
  //   return this.installationService.findOne(id);
  // }

  // @ApiBearerAuth()
  // @ApiBody({ type: [InstallationCreateDto] })
  // @Post()
  // createInstallation(@Body() newInstallation: InstallationCreateDto): Observable<InstallationDto> {
  //   return this.installationService.createInstallation(newInstallation).pipe(
  //     map((createdInstallation) => {
  //       return createdInstallation;
  //     })
  //   );
  // }

  // @ApiBearerAuth()
  // @ApiBody({ type: [InstallationUpdateDto] })
  // @Put(':id')
  // updateInstallation(@Param('id') id: string, @Body() updatedInstallation: InstallationUpdateDto): Observable<InstallationDto> {
  //   return this.installationService.updateInstallation(id, updatedInstallation);
  // }

  // @ApiBearerAuth()
  // @Delete(':id')
  // deleteInstallation(@Param('id') id: string): Observable<InstallationDto> {
  //   return this.installationService.deleteInstallation(id);
  // }
}
