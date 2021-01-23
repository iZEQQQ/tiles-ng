import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {GetUserResponse} from './dto/user/get-user-response';
import {Observable} from 'rxjs';
import {User} from './model/user';
import {map} from 'rxjs/operators';
import {PostUserRequest} from './dto/user/post-user-request';
import {PutUserRequest} from './dto/user/put-user-request';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getUser(id: string): Observable<User> {
    return this.http.get<GetUserResponse>('http://localhost:8080/api/user/' , {withCredentials: true})
      .pipe(map(value => {
        const user: User = new User();
        user.login = value.login;
        return user;
      }));
  }


  postUser(user: User): void {
    const req = new PostUserRequest();
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    req.login = user.login;
    req.password = user.password;
    this.http.post('http://localhost:8080/api/users', req, {withCredentials: true})
      .subscribe(
        value => console.log(value),
        error => console.log(error));
  }


}
