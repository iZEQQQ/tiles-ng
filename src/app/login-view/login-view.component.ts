import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  private _login: string;
  private _pass: string;


  constructor(private auth: AuthenticationService, private router: Router) {
  }

  get login(): string {
    return this._login;
  }

  set login(value: string) {
    this._login = value;
  }

  get pass(): string {
    return this._pass;
  }

  set pass(value: string) {
    this._pass = value;
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.auth.login(this._login, this._pass).subscribe(value => {
      console.log(value);
    });
    this.router.navigate(['/tiles']);
  }

  isLogged(): boolean {
    return this.auth.isLogged();
  }


}
