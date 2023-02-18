import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from, map, switchMap } from 'rxjs';
import { Repository } from 'typeorm';
import { ServersMapper } from '../../utils/mapper/serversMapper';
import { ServerEntity } from '../models/server.entity';
import { ServerDto, ServerCreateDto, ServerUpdateDto } from '../models/server.interface';

@Injectable()
export class ServerService {
  constructor(
    @InjectRepository(ServerEntity)
    private readonly serverRepository: Repository<ServerEntity>
  ) {}

  findAll(): Observable<ServerDto[]> {
    return from(
      this.serverRepository.find({
        relations: ['installations'],
      })
    ).pipe(
      map((servers) => {
        return ServersMapper.mapServerEntitiesToDtos(servers);
      })
    );
  }

  findOne(id: string): Observable<ServerDto> {
    return from(
      this.serverRepository.findOne({
        relations: ['installations'],
        where: { id },
      })
    ).pipe(
      map((server) => {
        if (server) {
          return ServersMapper.mapServerEntityToDto(server);
        } else {
          throw new NotFoundException(`Server with ID [${id}] not found`);
        }
      })
    );
  }

  createServer(newServer: ServerCreateDto): Observable<ServerDto> {
    return from(this.serverRepository.save(newServer)).pipe(
      map((createdServer) => {
        return ServersMapper.mapServerEntityToDto(createdServer);
      })
    );
  }

  updateServer(id: string, updatedServer: ServerUpdateDto): Observable<ServerDto> {
    return from(this.serverRepository.update(id, updatedServer)).pipe(switchMap(() => this.findOne(id)));
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  deleteServer(id: string): Observable<any> {
    return from(this.serverRepository.delete(id));
  }
}
