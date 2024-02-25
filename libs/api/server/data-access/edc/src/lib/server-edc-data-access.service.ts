import { ServerEntity } from '@edc/shared-interfaces/db-interface';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ServerEdcDataAccessService {
  constructor(@InjectRepository(ServerEntity) private readonly serverRepository: Repository<ServerEntity>) {}
}
