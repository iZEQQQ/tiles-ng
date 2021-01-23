import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRecommendedComponent } from './display-recommended.component';

describe('DisplayRecommendedComponent', () => {
  let component: DisplayRecommendedComponent;
  let fixture: ComponentFixture<DisplayRecommendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayRecommendedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayRecommendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
