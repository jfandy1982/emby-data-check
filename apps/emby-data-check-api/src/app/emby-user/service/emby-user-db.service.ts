import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { DeleteResult, Repository } from 'typeorm';
import { EmbyUserEntity } from '../models/emby-user.entity';
import { EmbyUserDto } from '../models/emby-user.interface';

@Injectable()
export class EmbyUserDbService {
  constructor(
    @InjectRepository(EmbyUserEntity)
    private readonly embyUserRepository: Repository<EmbyUserEntity>
  ) {}

  async findAllEmbyUsers(options: IPaginationOptions): Promise<Pagination<EmbyUserDto>> {
    return paginate<EmbyUserEntity>(this.embyUserRepository, options, { relations: ['user', 'installation', 'watchStates'] });
  }

  async findOneEmbyUserById(id: string): Promise<EmbyUserDto> {
    if (id) {
      return this.embyUserRepository.findOne({
        relations: ['user', 'installation', 'watchStates'],
        where: { id },
      });
    } else {
      throw new BadRequestException('Bad Request');
    }
  }

  async createNewEmbyUser(newEmbyUser: EmbyUserDto): Promise<EmbyUserDto> {
    try {
      const createdEmbyUser = await this.embyUserRepository.save(this.embyUserRepository.create(newEmbyUser));
      return this.findOneEmbyUserById(createdEmbyUser.id);
    } catch {
      throw new BadRequestException('Bad Request');
    }
  }

  async updateExistingEmbyUser(existingEmbyUser: EmbyUserDto): Promise<EmbyUserDto> {
    try {
      await this.embyUserRepository.save(existingEmbyUser);
      return this.findOneEmbyUserById(existingEmbyUser.id);
    } catch {
      throw new BadRequestException('Bad Request');
    }
  }

  async deleteEmbyUser(id: string): Promise<DeleteResult> {
    return this.embyUserRepository.delete(id);
  }
}
