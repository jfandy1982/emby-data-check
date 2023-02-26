import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserHttpService {
  constructor(private readonly httpService: HttpService) {}
}
