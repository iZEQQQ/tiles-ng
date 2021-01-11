import {Component, Input, OnInit} from '@angular/core';
import {Tile} from '../model/tile';

@Component({
  selector: 'app-display-tiles-list',
  templateUrl: './display-tiles-list.component.html',
  styleUrls: ['./display-tiles-list.component.css']
})
export class DisplayTilesListComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  private _tiles: Tile[];

  constructor(tiles: Tile[]) {
    this._tiles = tiles;
  }

  get tiles(): Tile[] {
    return this._tiles;
  }

  @Input()
  set tiles(value: Tile[]) {
    this._tiles = value;
  }

  ngOnInit(): void {
  }

}
