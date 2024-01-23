import { TestBed } from '@angular/core/testing';

import { NewsListResolver } from './news-list.resolver';

describe('NewsListResolver', () => {
  let resolver: NewsListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(NewsListResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
