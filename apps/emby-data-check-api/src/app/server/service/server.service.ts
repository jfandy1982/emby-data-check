import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { Repository } from 'typeorm';
import { ServerEntity } from '../models/server.entity';
import { ServerDto } from '../models/server.interface';

@Injectable()
export class ServerService {
  constructor(
    @InjectRepository(ServerEntity)
    private readonly serverRepository: Repository<ServerEntity>
  ) {}

  async findAll(options: IPaginationOptions): Promise<Pagination<ServerDto>> {
    return paginate<ServerEntity>(this.serverRepository, options, { relations: ['installations'] });
  }

  // findOne(id: string): Observable<ServerDto> {
  //   return from(
  //     this.serverRepository.findOne({
  //       relations: ['installations'],
  //       where: { id },
  //     })
  //   ).pipe(
  //     map((server) => {
  //       if (server) {
  //         return ServersMapper.mapServerEntityToDto(server);
  //       } else {
  //         throw new NotFoundException(`Server with ID [${id}] not found`);
  //       }
  //     })
  //   );
  // }

  // createServer(newServer: ServerCreateDto): Observable<ServerDto> {
  //   return from(this.serverRepository.save(newServer)).pipe(
  //     map((createdServer) => {
  //       return ServersMapper.mapServerEntityToDto(createdServer);
  //     })
  //   );
  // }

  // updateServer(id: string, updatedServer: ServerUpdateDto): Observable<ServerDto> {
  //   return from(this.serverRepository.update(id, updatedServer)).pipe(switchMap(() => this.findOne(id)));
  // }

  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // deleteServer(id: string): Observable<any> {
  //   return from(this.serverRepository.delete(id));
  // }
}
