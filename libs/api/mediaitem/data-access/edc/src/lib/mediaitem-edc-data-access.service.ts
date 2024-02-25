import { ItemEntity } from '@edc/shared-interfaces/db-interface';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MediaitemEdcDataAccessService {
  constructor(@InjectRepository(ItemEntity) private readonly mediaitemRepository: Repository<ItemEntity>) {}
}
