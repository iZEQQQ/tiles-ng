import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {GetUserResponse} from './dto/user/get-user-response';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  isLogged(): boolean {
    const item = localStorage.getItem('userAuth:userPass');
    return !!item;
  }

  loggout(): void {
    localStorage.removeItem('userAuth:userPass');
  }

  login(login: string, pass: string): Observable<GetUserResponse> {
    const user = login + ':' + pass;
    const header: HttpHeaders = new HttpHeaders().set('Authorization', 'Basic ' + btoa(user));
    const obs = this.http.get<GetUserResponse>('http://localhost:8080/api/user', {headers: header});
    obs.subscribe(value => {
      localStorage.setItem('userAuth:userPass', btoa(user));
    });
    return obs;
  }




}
