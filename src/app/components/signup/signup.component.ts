import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  model: any;

  constructor() {
    this.model = {
      userId: "",
      password: "",
      passwordToConfirm: ""
    };
  }

  ngOnInit() {
  }

  cancel(): void {
    this.model = {
      userId: "",
      password: "",
      passwordToConfirm: ""
    };
  }
}
