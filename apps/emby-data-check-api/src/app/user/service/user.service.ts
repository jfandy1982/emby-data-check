import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { Repository } from 'typeorm';
import { UserEntity } from '../models/user.entity';
import { UserDto } from '../models/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  async findAll(options: IPaginationOptions): Promise<Pagination<UserDto>> {
    return paginate<UserEntity>(this.userRepository, options, { relations: ['embyUsers'] });
  }

  // findOne(id: string): Observable<UserDto> {
  //   return from(
  //     this.userRepository.findOne({
  //       relations: ['embyUsers'],
  //       where: { id },
  //     })
  //   ).pipe(
  //     map((user) => {
  //       if (user) {
  //         return UsersMapper.mapUserEntityToDto(user);
  //       } else {
  //         throw new NotFoundException(`User with ID [${id}] not found`);
  //       }
  //     })
  //   );
  // }

  // createUser(newUser: UserCreateDto): Observable<UserDto> {
  //   // TODO:
  //   //  Password still saved in plain text in the database.
  //   //    It will be hashed when I add an AuthModule later!!
  //   return from(this.userRepository.save(newUser)).pipe(
  //     map((createdUser) => {
  //       return UsersMapper.mapUserEntityToDto(createdUser);
  //     })
  //   );
  // }

  // updateUser(id: string, updatedUser: UserUpdateDto): Observable<UserDto> {
  //   delete updatedUser.role;

  //   return from(this.userRepository.update(id, updatedUser)).pipe(switchMap(() => this.findOne(id)));
  // }

  // updateRoleOfUser(id: string, updatedUser: UserUpdateDto): Observable<UserDto> {
  //   delete updatedUser.name;

  //   return from(this.userRepository.update(id, updatedUser)).pipe(switchMap(() => this.findOne(id)));
  // }

  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // deleteUser(id: string): Observable<any> {
  //   return from(this.userRepository.delete(id));
  // }
}
