import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTilesListComponent } from './display-tiles-list.component';

describe('DisplayTilesListComponent', () => {
  let component: DisplayTilesListComponent;
  let fixture: ComponentFixture<DisplayTilesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayTilesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTilesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
