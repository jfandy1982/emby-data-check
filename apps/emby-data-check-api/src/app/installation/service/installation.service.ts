import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { Repository } from 'typeorm';
import { InstallationEntity } from '../models/installation.entity';
import { InstallationCreateDto, InstallationDto } from '../models/installation.interface';

@Injectable()
export class InstallationService {
  constructor(
    @InjectRepository(InstallationEntity)
    private readonly installationRepository: Repository<InstallationEntity>
  ) {}

  async findAllInstallations(options: IPaginationOptions): Promise<Pagination<InstallationDto>> {
    return paginate<InstallationEntity>(this.installationRepository, options, { relations: ['server', 'embyUsers'] });
  }

  async findOneInstallationById(id: string): Promise<InstallationDto> {
    if (id) {
      return this.installationRepository.findOne({
        relations: ['server', 'embyUsers'],
        where: { id },
      });
    } else {
      throw new BadRequestException('Bad Request');
    }
  }

  async createNewInstallation(newInstallation: InstallationCreateDto): Promise<InstallationDto> {
    try {
      const createdInstallation = await this.installationRepository.save(this.installationRepository.create(newInstallation));
      return this.findOneInstallationById(createdInstallation.id);
    } catch {
      throw new BadRequestException('Bad Request');
    }
  }

  // updateInstallation(id: string, updatedInstallation: InstallationUpdateDto): Observable<InstallationDto> {
  //   return from(this.installationRepository.update(id, updatedInstallation)).pipe(
  //     switchMap(() => {
  //       return this.findOne(id);
  //     })
  //   );
  // }

  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // deleteInstallation(id: string): Observable<any> {
  //   return from(this.installationRepository.delete(id));
  // }
}
