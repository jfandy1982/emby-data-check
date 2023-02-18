import { TestBed } from '@angular/core/testing';

import { MediaItemsService } from './media-items.service';

describe('MediaItemsService', () => {
  let service: MediaItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
