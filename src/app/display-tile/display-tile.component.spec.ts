import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTileComponent } from './display-tile.component';

describe('DisplayTileComponent', () => {
  let component: DisplayTileComponent;
  let fixture: ComponentFixture<DisplayTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
