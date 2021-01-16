import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {
  username: any;
  id: any;

  constructor() { }

  ngOnInit(): void {
  }

  changePassword(): void{
    alert('Change Password');
  }
  logOut(): void{
  }
}
