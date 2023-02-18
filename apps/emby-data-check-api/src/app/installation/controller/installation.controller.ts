import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { Observable, map } from 'rxjs';
import { InstallationDto, InstallationCreateDto, InstallationUpdateDto } from '../models/installation.interface';
import { InstallationService } from '../service/installation.service';

@ApiTags('installations')
@Controller('installations')
export class InstallationController {
  constructor(private installationService: InstallationService) {}

  @Get()
  findInstallations(): Observable<InstallationDto[]> {
    return this.installationService.findAll();
  }

  @Get(':id')
  findOneInstallation(@Param('id') id: string): Observable<InstallationDto> {
    return this.installationService.findOne(id);
  }

  @ApiBearerAuth()
  @ApiBody({ type: [InstallationCreateDto] })
  @Post()
  createInstallation(@Body() newInstallation: InstallationCreateDto): Observable<InstallationDto> {
    return this.installationService.createInstallation(newInstallation).pipe(
      map((createdInstallation) => {
        return createdInstallation;
      })
    );
  }

  @ApiBearerAuth()
  @ApiBody({ type: [InstallationUpdateDto] })
  @Put(':id')
  updateInstallation(@Param('id') id: string, @Body() updatedInstallation: InstallationUpdateDto): Observable<InstallationDto> {
    return this.installationService.updateInstallation(id, updatedInstallation);
  }

  @ApiBearerAuth()
  @Delete(':id')
  deleteInstallation(@Param('id') id: string): Observable<InstallationDto> {
    return this.installationService.deleteInstallation(id);
  }
}
