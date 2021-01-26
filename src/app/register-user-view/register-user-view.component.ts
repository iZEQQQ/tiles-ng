import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';

import {HttpClient} from '@angular/common/http';
import {PostUserRequest} from '../dto/user/post-user-request';


@Component({
  selector: 'app-register-user-view',
  templateUrl: './register-user-view.component.html',
  styleUrls: ['./register-user-view.component.css']
})
export class RegisterUserViewComponent implements OnInit {

  private _user: User;
  private passwordRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,16}$');
  private userRegex = new RegExp('^(?=[a-zA-Z0-9._]{4,14}$)(?!.*[_.]{2})[^_.].*[^_.]$');

  private _passwordRepeated: string;
  private messageSuccess: boolean;

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
      const testPass = this.passwordRegex.test(this._user.password);
      const testUser = this.userRegex.test(this._user.login);
      console.log(testUser + '\n' + testPass);
      if (testPass && testUser){
        this.register(this.user.login, this.passwordRepeated);
        this.messageSuccess = true;

        // setTimeout(() => {
        //   this.messageSuccess = false;
        // }, 3000);
        // this.auth.login(this._user.login, this.passwordRepeated).subscribe(value => {
        //   console.log(value);
        // });
        this.router.navigate(['/login']);
      }
      else {
        if (testUser === false){
          alert('Username doesnt match regex');
        }
        if (testPass === false){
          alert('Password doesnt match regex');
        }
      }
    } else {
      alert('Both passwords need to be the same');
    }
  }


  register(login: string, pass: string): void {
    const req = new PostUserRequest(login.trim(), pass.trim());
    const obs = this.http.post<PostUserRequest>('http://localhost:8080/api/users', req);
    obs.subscribe(value => {
      alert('ok');
    });
  }

}
