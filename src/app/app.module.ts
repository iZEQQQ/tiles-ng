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
import { LoginViewComponent } from './login-view/login-view.component';
import { RegisterUserViewComponent } from './register-user-view/register-user-view.component';
import {RatingModule} from 'ng-starrating';
import { DisplayRecommendedComponent } from './display-recommended/display-recommended.component';
import { DisplayRecommendedListComponent } from './display-recommended-list/display-recommended-list.component';



@NgModule({
  declarations: [
    AppComponent,
    DisplayTilesListComponent,
    TileListViewComponent,
    DisplayTileComponent,
    TileViewComponent,
    ProfileViewComponent,
    LoginViewComponent,
    RegisterUserViewComponent,
    DisplayRecommendedComponent,
    DisplayRecommendedListComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    RatingModule
  ],
  providers: [TileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
