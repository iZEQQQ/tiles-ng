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

  getTiles(): Observable<number[]> {
    return this.http.get<GetTilesResponse>('http://localhost:8080/api/tiles', {withCredentials: true})
      .pipe(map(value => {
        return value.ids;
      }));
  }

  // TODO a zdjecie ?
  getTile(id: number): Observable<Tile> {
    return this.http.get<GetTileResponse>('http://localhost:8080/api/tiles/' + id, {withCredentials: true})
      .pipe(map(value => {
        const tile: Tile = new Tile();
        tile.name = value.name;
        // tile.photo = value.photo;
        tile.price = value.price;
        tile.rating = value.rating;
        tile.type = value.type;
        return tile;
      }));
  }


}
