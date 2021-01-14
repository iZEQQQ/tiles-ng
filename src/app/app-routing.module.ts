import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TileListViewComponent} from './tile-list-view/tile-list-view.component';
import {TileViewComponent} from './tile-view/tile-view.component';

 // TODO connection refused z uwagi na wymuszenie logowania
const routes: Routes = [
  {
    path: 'tiles',
    component: TileListViewComponent
  },
  {
    path: 'tiles/:tileId',
    component: TileViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
