import { Module } from '@nestjs/common';
import { ServerDbService } from './service/server-db.service';

@Module({
  providers: [ServerDbService],
})
export class ServerModule {}
