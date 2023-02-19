import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { Repository } from 'typeorm';
import { EmbyUserEntity } from '../models/emby-user.entity';
import { EmbyUserDto } from '../models/emby-user.interface';

@Injectable()
export class EmbyUserService {
  constructor(
    @InjectRepository(EmbyUserEntity)
    private readonly embyUserRepository: Repository<EmbyUserEntity>
  ) {}

  async findAll(options: IPaginationOptions): Promise<Pagination<EmbyUserDto>> {
    return paginate<EmbyUserEntity>(this.embyUserRepository, options, { relations: ['user', 'installation', 'watchStates'] });
  }

  async findOne(id: string): Promise<EmbyUserDto> {
    if (id) {
      return this.embyUserRepository.findOne({
        relations: ['user', 'installation', 'watchStates'],
        where: { id },
      });
    } else {
      throw new BadRequestException('Bad Request');
    }
  }

  // createEmbyUser(newEmbyUser: EmbyUserCreateDto): Observable<EmbyUserDto> {
  //   return from(this.embyUserRepository.save(newEmbyUser)).pipe(
  //     map((createdEmbyUser) => {
  //       return EmbyUsersMapper.mapEmbyUserEntityToDto(createdEmbyUser);
  //     })
  //   );
  // }

  // updateEmbyUser(id: string, updatedEmbyUser: EmbyUserUpdateDto): Observable<EmbyUserDto> {
  //   return from(this.embyUserRepository.update(id, updatedEmbyUser)).pipe(switchMap(() => this.findOne(id)));
  // }

  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // deleteEmbyUser(id: string): Observable<any> {
  //   return from(this.embyUserRepository.delete(id));
  // }
}
