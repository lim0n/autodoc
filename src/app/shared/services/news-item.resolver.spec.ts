import { TestBed } from '@angular/core/testing';

import { NewsItemResolver } from './news-item.resolver';

describe('NewsItemResolver', () => {
  let resolver: NewsItemResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(NewsItemResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
