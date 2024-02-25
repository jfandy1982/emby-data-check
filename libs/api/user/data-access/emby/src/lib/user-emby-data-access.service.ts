import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserEmbyDataAccessService {
  constructor(private readonly httpService: HttpService) {}
}
