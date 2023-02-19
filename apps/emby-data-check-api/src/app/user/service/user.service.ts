import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { Repository } from 'typeorm';
import { UserEntity } from '../models/user.entity';
import { UserCreateDto, UserDto } from '../models/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  async findAllUsers(options: IPaginationOptions): Promise<Pagination<UserDto>> {
    return paginate<UserEntity>(this.userRepository, options, { relations: ['embyUsers'] });
  }

  async findOneUserById(id: string): Promise<UserDto> {
    if (id) {
      return this.userRepository.findOne({
        relations: ['embyUsers'],
        where: { id },
      });
    } else {
      throw new BadRequestException('Bad Request');
    }
  }

  async createNewUser(newUser: UserCreateDto): Promise<UserDto> {
    try {
      const createdUser = await this.userRepository.save(this.userRepository.create(newUser));
      return this.findOneUserById(createdUser.id);
    } catch {
      throw new BadRequestException('Bad Request');
    }
  }

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
