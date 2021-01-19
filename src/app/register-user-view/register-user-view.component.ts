import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-register-user-view',
  templateUrl: './register-user-view.component.html',
  styleUrls: ['./register-user-view.component.css']
})
export class RegisterUserViewComponent implements OnInit {

  private _user: User;


  get user(): User {
    return this._user;
  }

  constructor(private service: UserService) {
  }

  ngOnInit(): void {
    this._user = new User();
  }

  onSubmit(): void {
    this.service.postUser(this._user);
  }

}
