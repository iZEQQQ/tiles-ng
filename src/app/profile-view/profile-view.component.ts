import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {

  private _user: User;

  get user(): User {
    return this._user;
  }

  constructor(private root: ActivatedRoute,
              private service: UserService) {
  }

  ngOnInit(): void {
    const userId = this.root.snapshot.paramMap.get('login');
    this.service.getUser(userId).subscribe(user => {
      this._user = user;
    });
  }

  logOut(): void {
  }
}
