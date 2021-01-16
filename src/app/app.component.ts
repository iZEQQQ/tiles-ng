import {Component, OnInit} from '@angular/core';
import {User} from './model/user';
import {ActivatedRoute} from '@angular/router';
import {UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tiles-ng';
  username = 'admin';
  private _user: User;
  // TODO is user logged from session
  isLogged(): boolean{
    // console.log(this._user.login);
    return true;
  }

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
}

