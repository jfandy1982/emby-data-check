import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { DeleteResult, Repository } from 'typeorm';
import { InstallationEntity } from '../models/installation.entity';
import { InstallationDto } from '../models/installation.interface';

@Injectable()
export class InstallationDbService {
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

  async createNewInstallation(newInstallation: InstallationDto): Promise<InstallationDto> {
    try {
      const createdInstallation = await this.installationRepository.save(this.installationRepository.create(newInstallation));
      return this.findOneInstallationById(createdInstallation.id);
    } catch {
      throw new BadRequestException('Bad Request');
    }
  }

  async deleteInstallation(id: string): Promise<DeleteResult> {
    return this.installationRepository.delete(id);
  }
}