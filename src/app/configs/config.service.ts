import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
  urls: any;

  constructor() {
    this.urls = {
      user: "http://localhost:8081"
    };
  }

  getServiceUrl(serviceName: string): string {
    return this.urls[serviceName];
  }
}
