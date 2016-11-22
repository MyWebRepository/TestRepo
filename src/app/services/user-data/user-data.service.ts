import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ConfigService } from '../../configs/config.service';

@Injectable()
export class UserDataService {

  constructor(private http: Http, private config: ConfigService) {
  }

  getUsers(): Observable<any[]> {
    return this.http.get(this.config.getServiceUrl('user') + '/listUsers')
      .map(response => response.json());
  }
}
