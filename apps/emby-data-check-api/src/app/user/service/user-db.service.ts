import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { UserEntity } from '../models/user.entity';
import { UserDto } from '../models/user.interface';

@Injectable()
export class UserDbService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  async findAllUsers(): Promise<UserDto[]> {
    return this.userRepository.find({ relations: ['embyUsers'] });
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

  async createNewUser(newUser: UserDto): Promise<UserDto> {
    try {
      const createdUser = await this.userRepository.save(this.userRepository.create(newUser));
      return this.findOneUserById(createdUser.id);
    } catch {
      throw new BadRequestException('Bad Request');
    }
  }

  async deleteUser(id: string): Promise<DeleteResult> {
    return this.userRepository.delete(id);
  }
}
