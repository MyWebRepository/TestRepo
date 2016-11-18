import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class UserDataService {

  constructor(private http: Http) {
  }

  getUsers() {
    return http.get( 'URL.user' + 'listUser')
      .map(response => response.json());
  }
}
