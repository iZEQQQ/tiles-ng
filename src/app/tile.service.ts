import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GetTilesResponse} from './dto/get-tiles-response';
import {map} from 'rxjs/operators';
import {Tile} from './model/tile';
import {GetTileResponse} from './dto/get-tile-response';

@Injectable({
  providedIn: 'root'
})
export class TileService {
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getTiles(): Observable<Tile[]> {
    return this.http.get<GetTilesResponse>('http://localhost:8080/api/tiles', {withCredentials: true})
      .pipe(map(value => {
        const tiles: Tile[] = [];
        value.tiles.forEach(tile => {
          tiles.push(new Tile(tile.id, tile.name, tile.price, tile.rating));
        });
        return tiles;
      }));
  }

  // // TODO a zdjecie ?
  getTile(id: number): Observable<Tile> {
    return this.http.get<GetTileResponse>('http://localhost:8080/api/tiles/' + id, {withCredentials: true})
      .pipe(map(value => {
        const tile: Tile = new Tile();
        tile.id = value.id;
        tile.name = value.name;
        tile.price = value.price;
        tile.rating = value.rating;
        return tile;
      }));
  }


}
