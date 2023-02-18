import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from, map, switchMap } from 'rxjs';
import { Repository } from 'typeorm';
import { InstallationsMapper } from '../../utils/mapper/installationsMapper';
import { InstallationEntity } from '../models/installation.entity';
import { InstallationDto, InstallationCreateDto, InstallationUpdateDto } from '../models/installation.interface';

@Injectable()
export class InstallationService {
  constructor(
    @InjectRepository(InstallationEntity)
    private readonly installationRepository: Repository<InstallationEntity>
  ) {}

  findAll(): Observable<InstallationDto[]> {
    return from(
      this.installationRepository.find({
        relations: ['server', 'embyUsers'],
      })
    ).pipe(
      map((installations) => {
        return InstallationsMapper.mapInstallationEntitiesToDtos(installations);
      })
    );
  }

  findOne(id: string): Observable<InstallationDto> {
    return from(
      this.installationRepository.findOne({
        relations: ['server', 'embyUsers'],
        where: { id },
      })
    ).pipe(
      map((installation) => {
        if (installation) {
          return InstallationsMapper.mapInstallationEntityToDto(installation);
        } else {
          throw new NotFoundException(`Installation with ID [${id}] not found`);
        }
      })
    );
  }

  createInstallation(newInstallation: InstallationCreateDto): Observable<InstallationDto> {
    return from(this.installationRepository.save(newInstallation)).pipe(
      map((createdInstallation) => {
        return InstallationsMapper.mapInstallationEntityToDto(createdInstallation);
      })
    );
  }

  updateInstallation(id: string, updatedInstallation: InstallationUpdateDto): Observable<InstallationDto> {
    return from(this.installationRepository.update(id, updatedInstallation)).pipe(
      switchMap(() => {
        return this.findOne(id);
      })
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  deleteInstallation(id: string): Observable<any> {
    return from(this.installationRepository.delete(id));
  }
}
