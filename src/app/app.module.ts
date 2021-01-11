import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayTilesListComponent } from './display-tiles-list/display-tiles-list.component';
import { TileListViewComponent } from './tile-list-view/tile-list-view.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayTilesListComponent,
    TileListViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
