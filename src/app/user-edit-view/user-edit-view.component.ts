import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {UserService} from '../user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-edit-view',
  templateUrl: './user-edit-view.component.html',
  styleUrls: ['./user-edit-view.component.css']
})
export class UserEditViewComponent implements OnInit {

  private _user: User;

  get user(): User {
    return this._user;
  }

  constructor(private root: ActivatedRoute,
              private userService: UserService) {
  }

  ngOnInit(): void {
    const userId = this.root.snapshot.paramMap.get('login');
    if (userId) {
      this.userService.getUser(userId).subscribe(user => {
        this._user = user;
      });
    }else{
      console.log('Pomocy nie wiem co tu dac ');
    }
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.userService.putUser(this._user);
  }

}
