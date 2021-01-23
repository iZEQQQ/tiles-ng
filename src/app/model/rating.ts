import {Tile} from './tile';
import {User} from './user';

export class Rating {

  private _rating: number;

  private _tile: Tile;

  private _user: User;


  get rating(): number {
    return this._rating;
  }

  set rating(value: number) {
    this._rating = value;
  }

  get tile(): Tile {
    return this._tile;
  }

  set tile(value: Tile) {
    this._tile = value;
  }

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }
}
