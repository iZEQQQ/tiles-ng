import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TileListViewComponent} from './tile-list-view/tile-list-view.component';
import {TileViewComponent} from './tile-view/tile-view.component';
import {ProfileViewComponent} from './profile-view/profile-view.component';
import {UserEditViewComponent} from './user-edit-view/user-edit-view.component';

const routes: Routes = [
  {
    path: 'tiles',
    component: TileListViewComponent
  },
  {
    path: 'tiles/:tileId',
    component: TileViewComponent
  },
  {
    path: 'profile/:login',
    component: ProfileViewComponent
  },
  {
    path: 'profile/:login/edit',
    component: UserEditViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
