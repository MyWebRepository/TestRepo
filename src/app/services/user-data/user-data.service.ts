import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { ConfigService } from '../../configs/config.service';

@Injectable()
export class UserDataService {

  constructor(private http: Http, private config: ConfigService) {
  }

  getUsers(): any {
    return this.http.get(this.config.getServiceUrl('user') + '/listUsers')
      .map(response => response.json());
  }
}
