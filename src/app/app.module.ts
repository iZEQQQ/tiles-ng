import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayTilesListComponent } from './display-tiles-list/display-tiles-list.component';
import { TileListViewComponent } from './tile-list-view/tile-list-view.component';
import { DisplayTileComponent } from './display-tile/display-tile.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {TileService} from './tile.service';
import {HttpClientModule} from '@angular/common/http';
import { TileViewComponent } from './tile-view/tile-view.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { UserEditViewComponent } from './user-edit-view/user-edit-view.component';
import { LoginViewComponent } from './login-view/login-view.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayTilesListComponent,
    TileListViewComponent,
    DisplayTileComponent,
    TileViewComponent,
    ProfileViewComponent,
    UserEditViewComponent,
    LoginViewComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
