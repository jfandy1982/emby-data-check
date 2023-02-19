import { Injectable } from '@nestjs/common';
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

  // findOne(id: string): Observable<EmbyUserDto> {
  //   return from(
  //     this.embyUserRepository.findOne({
  //       relations: ['user', 'installation', 'watchStates'],
  //       where: { id },
  //     })
  //   ).pipe(
  //     map((embyUser) => {
  //       if (embyUser) {
  //         return EmbyUsersMapper.mapEmbyUserEntityToDto(embyUser);
  //       } else {
  //         throw new NotFoundException(`EmbyUser with ID [${id}] not found`);
  //       }
  //     })
  //   );
  // }

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
