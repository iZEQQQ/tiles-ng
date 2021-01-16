import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {
  private _user: User;

  constructor(user: User) {
    this._user = user;
  }
  ngOnInit(): void {

  }

  changePassword(): void{
    alert('Change Password');
  }
  logOut(): void{
  }
}
