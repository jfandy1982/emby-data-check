import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BackupHttpService {
  constructor(private readonly httpService: HttpService) {}
}
