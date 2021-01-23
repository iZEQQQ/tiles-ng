import {Component, OnInit} from '@angular/core';
import {Tile} from '../model/tile';
import {ActivatedRoute} from '@angular/router';
import {TileService} from '../tile.service';
import {StarRatingComponent} from 'ng-starrating';


@Component({
  selector: 'app-tile-view',
  templateUrl: './tile-view.component.html',
  styleUrls: ['./tile-view.component.css']
})
export class TileViewComponent implements OnInit {


  private _tile: Tile;


  get tile(): Tile {
    return this._tile;
  }

  constructor(private root: ActivatedRoute,
              private tileService: TileService) {
  }

  ngOnInit(): void {
    const tileId = this.root.snapshot.paramMap.get('tileId');
    this.tileService.getTile(Number(tileId)).subscribe(tile => {
      this._tile = tile;
    });
  }

  addRating(): void {
    this.tile.rating = 1;
  }
  onRate($event: { oldValue: number, newValue: number, starRating: StarRatingComponent }): void {
    alert(`Old Value:${$event.oldValue},
      New Value: ${$event.newValue},
      Checked Color: ${$event.starRating.checkedcolor},
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }
}
