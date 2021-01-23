import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRecommendedListComponent } from './display-recommended-list.component';

describe('DisplayRecommendedListComponent', () => {
  let component: DisplayRecommendedListComponent;
  let fixture: ComponentFixture<DisplayRecommendedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayRecommendedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayRecommendedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
