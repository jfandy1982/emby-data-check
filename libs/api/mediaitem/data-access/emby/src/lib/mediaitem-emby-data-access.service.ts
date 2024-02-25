import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MediaitemEmbyDataAccessService {
  constructor(private readonly httpService: HttpService) {}
}
