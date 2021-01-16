import {Component, Input, OnInit} from '@angular/core';
import {Tile} from '../model/tile';

@Component({
  selector: ' app-display-tile',
  templateUrl: './display-tile.component.html',
  styleUrls: ['./display-tile.component.css']
})
export class DisplayTileComponent implements OnInit {

  private _tile: Tile;

  get tile(): Tile {
    return this._tile;
  }

  @Input()
  set tile(value: Tile) {
    this._tile = value;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
