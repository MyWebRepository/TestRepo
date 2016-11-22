import { Component, OnInit } from '@angular/core';

// Statics
import 'rxjs/add/observable/throw';

// Operators
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/switchMap';
//import 'rxjs/add/operator/toPromise';

import { UserDataService } from '../../services/user-data/user-data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[];

  constructor(private userData: UserDataService) {
    this.users = [];
  }

  ngOnInit() {
    this.userData.getUsers()
      .subscribe(users => this.users = users);
  }

}
