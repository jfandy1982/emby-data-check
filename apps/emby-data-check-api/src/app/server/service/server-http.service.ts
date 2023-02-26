import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class ServerHttpService {
  constructor(private readonly httpService: HttpService) {}
}
