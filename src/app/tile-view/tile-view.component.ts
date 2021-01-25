import {Component, OnInit} from '@angular/core';
import {Tile} from '../model/tile';
import {ActivatedRoute} from '@angular/router';
import {TileService} from '../tile.service';
import {StarRatingComponent} from 'ng-starrating';
import {Rating} from '../model/rating';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-tile-view',
  templateUrl: './tile-view.component.html',
  styleUrls: ['./tile-view.component.css']
})
export class TileViewComponent implements OnInit {

  private _rating: Rating;
  _rated = false;
  _userRating: number;

  get rating(): Rating {
    return this._rating;
  }

  private _tile: Tile;
  private _totalStar = 5;

  get tile(): Tile {
    return this._tile;
  }

  get totalStar(): number {
    return this._totalStar;
  }

  constructor(private root: ActivatedRoute,
              public tileService: TileService,
              public auth: AuthenticationService) {
  }

  ngOnInit(): void {
    const tileId = this.root.snapshot.paramMap.get('tileId');
    this.tileService.getTile(Number(tileId)).subscribe(tile => {
      this._tile = tile;
    });
    this.tileService.getRating(Number(tileId)).subscribe(rating => {
      this._rating = rating;
    });
  }

  onRate($event: { oldValue: number, newValue: number, starRating: StarRatingComponent }): void {
    this._userRating = $event.newValue;
    this.tileService.postRating(this.tile.id, $event.newValue);
    this._rated = true;
  }
}
