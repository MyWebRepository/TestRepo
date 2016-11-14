import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model = {
    userId: '',
    password: ''
  };

  constructor() {
  }

  ngOnInit() {
  }

  cancel(): void {
    this.model = {
      userId: '',
      password: ''
    };
  }

}
