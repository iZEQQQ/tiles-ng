import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileListViewComponent } from './tile-list-view.component';

describe('TileListViewComponent', () => {
  let component: TileListViewComponent;
  let fixture: ComponentFixture<TileListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TileListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
