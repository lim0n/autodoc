import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDetailPageComponent } from './news-item-page.component';

describe('NewsItemPageComponent', () => {
  let component: NewsDetailPageComponent;
  let fixture: ComponentFixture<NewsDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsDetailPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
