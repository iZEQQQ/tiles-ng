export class PostUserRequest {
  login: string;

  password: string;


  constructor(login: string, password: string) {
    this.login = login;
    this.password = password;
  }
}
