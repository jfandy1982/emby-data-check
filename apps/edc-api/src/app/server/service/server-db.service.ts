import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Server, ServerEntity } from '@shared-interfaces/edc';

@Injectable()
export class ServerDbService {
  constructor(@InjectRepository(ServerEntity) private readonly serverRepository: Repository<ServerEntity>) {}

  async findAllServers(): Promise<Server[]> {
    return this.serverRepository.find();
  }

  async createNewServer(newServer: Server): Promise<Server> {
    try {
      const createdServer = await this.serverRepository.save(this.serverRepository.create(newServer));
      return createdServer;
    } catch {
      throw new BadRequestException('Bad Request');
    }
  }
}
