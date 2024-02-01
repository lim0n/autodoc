import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsMasterpageComponent } from './news-masterpage.component';

describe('NewsMasterpageComponent', () => {
  let component: NewsMasterpageComponent;
  let fixture: ComponentFixture<NewsMasterpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsMasterpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsMasterpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
