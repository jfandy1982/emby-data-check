import { TestBed } from '@angular/core/testing';

import { MediaItemResolver } from './media-item.resolver';

describe('MediaItemResolver', () => {
  let resolver: MediaItemResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(MediaItemResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
