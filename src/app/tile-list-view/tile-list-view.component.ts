import {Component, OnInit} from '@angular/core';
import {Tile} from '../model/tile';
import {TileService} from '../tile.service';

@Component({
  selector: 'app-tile-list-view',
  templateUrl: './tile-list-view.component.html',
  styleUrls: ['./tile-list-view.component.css']
})
export class TileListViewComponent implements OnInit {

  private _tiles: Tile[];

  private service: TileService;

  get tiles(): Tile[] {
    return this._tiles;
  }

  constructor(service: TileService) {
    this.service = service;
  }

  ngOnInit(): void {
    //TODO dodc wielkosc strony w angularze pobieram liczbe taili dziele przez liczbe strony i ng forem wygenerowac przyciski do kazdego przycisku akcje on click zaladuj strone 1 potem kolejna i dopiero w reakcji wywoluje metode zwracajaca kafelki query param size i numer strony

    this.service.getTiles().subscribe(tiles => {
      this._tiles = tiles;
    });

  }

}
