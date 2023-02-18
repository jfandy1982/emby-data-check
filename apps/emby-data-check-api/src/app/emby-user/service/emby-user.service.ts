import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from, map, switchMap } from 'rxjs';
import { Repository } from 'typeorm';
import { EmbyUsersMapper } from '../../utils/mapper/emby-usersMapper';
import { EmbyUserEntity } from '../models/emby-user.entity';
import { EmbyUserDto, EmbyUserCreateDto, EmbyUserUpdateDto } from '../models/emby-user.interface';

@Injectable()
export class EmbyUserService {
  constructor(
    @InjectRepository(EmbyUserEntity)
    private readonly embyUserRepository: Repository<EmbyUserEntity>
  ) {}

  findAll(): Observable<EmbyUserDto[]> {
    return from(
      this.embyUserRepository.find({
        relations: ['user', 'installation', 'watchStates'],
      })
    ).pipe(
      map((embyUsers) => {
        return EmbyUsersMapper.mapEmbyUserEntitiesToDtos(embyUsers);
      })
    );
  }

  findOne(id: string): Observable<EmbyUserDto> {
    return from(
      this.embyUserRepository.findOne({
        relations: ['user', 'installation', 'watchStates'],
        where: { id },
      })
    ).pipe(
      map((embyUser) => {
        if (embyUser) {
          return EmbyUsersMapper.mapEmbyUserEntityToDto(embyUser);
        } else {
          throw new NotFoundException(`EmbyUser with ID [${id}] not found`);
        }
      })
    );
  }

  createEmbyUser(newEmbyUser: EmbyUserCreateDto): Observable<EmbyUserDto> {
    return from(this.embyUserRepository.save(newEmbyUser)).pipe(
      map((createdEmbyUser) => {
        return EmbyUsersMapper.mapEmbyUserEntityToDto(createdEmbyUser);
      })
    );
  }

  updateEmbyUser(id: string, updatedEmbyUser: EmbyUserUpdateDto): Observable<EmbyUserDto> {
    return from(this.embyUserRepository.update(id, updatedEmbyUser)).pipe(switchMap(() => this.findOne(id)));
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  deleteEmbyUser(id: string): Observable<any> {
    return from(this.embyUserRepository.delete(id));
  }
}
