import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-rxjs-example2',
  templateUrl: './rxjs-example2.component.html',
  styleUrls: ['./rxjs-example2.component.css']
})
export class RxjsExample2Component implements OnInit {
  private ticks: number = 0;
  private syncResults: any[] = [];

  constructor() { }

  ngOnInit() {
    let timer = Observable.timer(2000,1000);
    timer.subscribe(t => this.ticks = t);

    let first = Observable.of({source:1,value:1});
    let second = Observable.of({source:2,value:1});
    Observable.forkJoin(first,second)
      .subscribe((res: any) => this.syncResults = res);
  }

}
