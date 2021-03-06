import {Component, OnInit} from '@angular/core';
import {User} from './model/user';
import {ActivatedRoute} from '@angular/router';
import {UserService} from './user.service';
import {AuthenticationService} from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tiles-ng';

  private _user: User;

  get user(): User {
    return this._user;
  }

  constructor(private root: ActivatedRoute,
              private service: UserService,
              private auth: AuthenticationService) {
  }

  ngOnInit(): void {
  }

  isLogged(): boolean {
    return this.auth.isLogged();
  }
  logout(): void {
    this.auth.loggout();
  }
}
