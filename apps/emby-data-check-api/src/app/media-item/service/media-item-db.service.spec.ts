import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { MediaItemEntity } from '../models/media-item.entity';
import { MediaItemDbService } from './media-item-db.service';

describe('MediaItemService', () => {
  let service: MediaItemDbService;

  const mockMediaItemEntityRepository = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MediaItemDbService, { provide: getRepositoryToken(MediaItemEntity), useValue: mockMediaItemEntityRepository }],
    }).compile();

    service = module.get<MediaItemDbService>(MediaItemDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
