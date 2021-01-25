import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GetTilesResponse} from './dto/tile/get-tiles-response';
import {map} from 'rxjs/operators';
import {Tile} from './model/tile';
import {GetTileResponse} from './dto/tile/get-tile-response';
import {GetRatingResponse} from './dto/rating/get-rating-response';
import {Rating} from './model/rating';
import {PostRatingRequest} from './dto/rating/post-rating-request';
import {User} from './model/user';
import {PostUserRequest} from './dto/user/post-user-request';

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
          tiles.push(new Tile(tile.id, tile.name, tile.price, tile.type, tile.page));
        });
        return tiles;
      }));
  }

  getRecommended(): Observable<Tile[]> {
    return this.http.get<GetTilesResponse>('http://localhost:8080/api/tiles/recommended', {withCredentials: true})
      .pipe(map(value => {
        const tiles: Tile[] = [];
        value.tiles.forEach(tile => {
          tiles.push(new Tile(tile.id, tile.name, tile.price, tile.type, tile.page));
        });
        return tiles;
      }));
  }

  getRating(id: number): Observable<Rating> {
    return this.http.get<GetRatingResponse>('http://localhost:8080/api/tiles/' + id + '/rating', {withCredentials: true})
      .pipe(map(value => {
        const rating: Rating = new Rating();
        rating.rating = value.rating;
        return rating;
      }));
  }

  postRating(id: number, ratingVal: number): void {
    const req = new PostRatingRequest(ratingVal);
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    this.http.post('http://localhost:8080/api/tiles/' + id + '/rating/add', req, {withCredentials: true})
      .subscribe(value => console.log('GIT'),
        error => console.log(error));
  }

  getTile(id: number): Observable<Tile> {
    return this.http.get<GetTileResponse>('http://localhost:8080/api/tiles/' + id, {withCredentials: true})
      .pipe(map(value => {
        const tile: Tile = new Tile();
        tile.id = value.id;
        tile.name = value.name;
        tile.price = value.price;
        tile.type = value.type;
        tile.page = value.page;
        return tile;
      }));
  }

}
