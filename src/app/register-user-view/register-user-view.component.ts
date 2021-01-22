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

  private _passwordRepeated: string;

  get passwordRepeated(): string {
    return this._passwordRepeated;
  }

  set passwordRepeated(value: string) {
    this._passwordRepeated = value;
  }

  get user(): User {
    return this._user;
  }

  constructor(private service: UserService) {
  }

  ngOnInit(): void {
    this._user = new User();
  }

  onSubmit(): void {
    if (this._passwordRepeated === this._user.password) {
      this.service.postUser(this._user);
    }else{
      alert('Both passwords need to be the same');
    }
  }

}
