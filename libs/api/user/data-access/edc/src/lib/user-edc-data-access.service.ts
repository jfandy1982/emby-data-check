import { UserEntity } from '@edc/shared-interfaces/db-interface';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserEdcDataAccessService {
  constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {}
}
