import {Component, Input, OnInit} from '@angular/core';
import {Tile} from '../model/tile';

@Component({
  selector: 'app-display-tiles-list',
  templateUrl: './display-tiles-list.component.html',
  styleUrls: ['./display-tiles-list.component.css']
})
export class DisplayTilesListComponent implements OnInit {

  private _tiles: Tile[];

  get tiles(): Tile[] {
    return this._tiles;
  }

  @Input()
  set tiles(value: Tile[]) {
    this._tiles = value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
