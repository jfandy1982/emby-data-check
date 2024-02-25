import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ServerEmbyDataAccessService {
  constructor(private readonly httpService: HttpService) {}
}
