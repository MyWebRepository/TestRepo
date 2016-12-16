import { Component, OnInit } from '@angular/core';
//import  { LifecycleExampleComponent } from './lifecycle-example.component';

@Component({
  selector: 'app-lifecycle-container-example',
  templateUrl: 'lifecycle-container-example.component.html',
  styleUrls: ['lifecycle-container-example.component.css']
})
export class LifecycleContainerExampleComponent implements OnInit {
  name: string;
  logs: string[] = [];
  showChild: boolean = true;

  constructor() {
    this.name = 'Alice';
    setTimeout(() => this.updateName(), 3000);
    setTimeout(() => this.hideChild(), 4000);
  }

  updateName() {
    this.name = 'Bob';
  }

  hideChild() {
    this.showChild = false;
    this.logs.push(`onDestroy`);
  }

  onLog(data) {
    this.logs.push(data);
  }

  ngOnInit() {
  }

}
