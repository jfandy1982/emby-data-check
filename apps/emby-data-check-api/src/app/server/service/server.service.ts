import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { DeleteResult, Repository } from 'typeorm';
import { ServerEntity } from '../models/server.entity';
import { ServerDto } from '../models/server.interface';

@Injectable()
export class ServerService {
  constructor(
    @InjectRepository(ServerEntity)
    private readonly serverRepository: Repository<ServerEntity>
  ) {}

  async findAllServers(options: IPaginationOptions): Promise<Pagination<ServerDto>> {
    return paginate<ServerEntity>(this.serverRepository, options, { relations: ['installations'] });
  }

  async findOneServerById(id: string): Promise<ServerDto> {
    if (id) {
      return this.serverRepository.findOne({
        relations: ['installations'],
        where: { id },
      });
    } else {
      throw new BadRequestException('Bad Request');
    }
  }

  async createNewServer(newServer: ServerDto): Promise<ServerDto> {
    try {
      const createdServer = await this.serverRepository.save(this.serverRepository.create(newServer));
      return this.findOneServerById(createdServer.id);
    } catch {
      throw new BadRequestException('Bad Request');
    }
  }

  // updateServer(id: string, updatedServer: ServerUpdateDto): Observable<ServerDto> {
  //   return from(this.serverRepository.update(id, updatedServer)).pipe(switchMap(() => this.findOne(id)));
  // }

  async deleteServer(id: string): Promise<DeleteResult> {
    return this.serverRepository.delete(id);
  }
}
