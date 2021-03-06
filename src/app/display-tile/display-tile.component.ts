import {Component, Input, OnInit} from '@angular/core';
import {Tile} from '../model/tile';
import {StarRatingComponent} from 'ng-starrating';
import {Rating} from '../model/rating';
import {ActivatedRoute, Router} from '@angular/router';
import {TileService} from '../tile.service';

@Component({
  selector: ' app-display-tile',
  templateUrl: './display-tile.component.html',
  styleUrls: ['./display-tile.component.css']
})
export class DisplayTileComponent implements OnInit {

  private _tile: Tile;
  private _totalStar = 5;
  private _rating: Rating;
  get tile(): Tile {
    return this._tile;
  }
  @Input()
  set tile(value: Tile) {
    this._tile = value;
  }
  get rating(): Rating {
    return this._rating;
  }

  constructor(private root: ActivatedRoute,
              public tileService: TileService,
              public router: Router) {
  }

  ngOnInit(): void {
    this.tileService.getRating(this.tile.id).subscribe(rating => {
      this._rating = rating;
    });
  }
  get totalStar(): number {
    return this._totalStar;
  }
}
