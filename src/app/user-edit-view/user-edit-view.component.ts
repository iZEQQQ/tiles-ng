import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {UserService} from '../user.service';
import {ActivatedRoute} from '@angular/router';
import {AuthenticationService} from '../authentication.service';
import {Observable} from 'rxjs';
import {PostUserRequest} from '../dto/user/post-user-request';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-user-edit-view',
  templateUrl: './user-edit-view.component.html',
  styleUrls: ['./user-edit-view.component.css']
})
export class UserEditViewComponent {

  private _user: User;
  passwordRepeated: any;

  get user(): User {
    return this._user;
  }

  constructor(private root: ActivatedRoute,
              private userService: UserService,
              private authorService: AuthenticationService,
              private http: HttpClient) {
  }


  onSubmit(login: string, pass: string): Observable<PostUserRequest> {
    if (this.passwordRepeated === this._user.password) {
      const user = login + ':' + pass;
      const header: HttpHeaders = new HttpHeaders().set('Authorization', 'Basic ' + btoa(user));
      const obs = this.http.post<PostUserRequest>('http://localhost:8080/api/user', {headers: header});
      obs.subscribe(value => {
        localStorage.setItem('userAuth:userPass', btoa(user));
      });
      return obs;
    } else {
      alert('Both passwords need to be the same');
    }
  }

  isLogged(): boolean{
   return this.authorService.isLogged();
  }

}

