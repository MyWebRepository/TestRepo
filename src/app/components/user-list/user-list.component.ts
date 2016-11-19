import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data/user-data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any;

  constructor(private userData: UserDataService) {
    debugger;
    this.users = this.userData.getUsers();
  }

  ngOnInit() {
  }


}
