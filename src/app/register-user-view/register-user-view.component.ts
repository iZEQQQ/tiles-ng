import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {LoginViewComponent} from '../login-view/login-view.component';
import {AuthenticationService} from '../authentication.service';
import {Observable} from 'rxjs';
import {GetUserResponse} from '../dto/user/get-user-response';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PostUserRequest} from '../dto/user/post-user-request';

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

  constructor(private service: UserService,
              private router: Router,
              private auth: AuthenticationService,
              private http: HttpClient) {
  }

  ngOnInit(): void {
    this._user = new User();
  }

  onSubmit(): void {
    if (this._passwordRepeated === this._user.password) {
      this.service.postUser(this._user);
      this.auth.login(this._user.login, this._user.password);
      this.router.navigate(['/tiles']);
    } else {
      alert('Both passwords need to be the same');
    }
  }


  register(login: string, pass: string): Observable<PostUserRequest> {
    const user = login + ':' + pass;
    const header: HttpHeaders = new HttpHeaders().set('Authorization', 'Basic ' + btoa(user));
    const obs = this.http.post<PostUserRequest>('http://localhost:8080/api/user', {headers: header});
    obs.subscribe(value => {
      localStorage.setItem('userAuth:userPass', btoa(user));
    });
    return obs;
  }

}
