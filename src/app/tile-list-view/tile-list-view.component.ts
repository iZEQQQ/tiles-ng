import {Component, OnInit} from '@angular/core';
import {Tile} from '../model/tile';
import {TileService} from '../tile.service';

@Component({
  selector: 'app-tile-list-view',
  templateUrl: './tile-list-view.component.html',
  styleUrls: ['./tile-list-view.component.css']
})
export class TileListViewComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  private _tiles: Tile[] = [];

  private service: TileService;

  get tiles(): Tile[] {
    return this._tiles;
  }

  constructor(service: TileService) {
    this.service = service;
  }

  ngOnInit(): void {
    this._tiles = [];
    this.service.getTiles().subscribe(tiles => {
      tiles.forEach(id => {
        this.service.getTile(id).subscribe(tile => {
          this._tiles.push(tile);
        });
      });
    });
  }

}
