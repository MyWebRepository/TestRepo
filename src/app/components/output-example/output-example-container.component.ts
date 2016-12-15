import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-example-container',
  templateUrl: 'output-example-container.component.html',
  styleUrls: ['output-example-container.component.css']
})
export class OutputExampleContainerComponent implements OnInit {

  number1: number;
  number2: number;
  number3: number;
  number4: number;

  constructor() {
    this.number1 = 0;
    this.number2 = 0;
    this.number3 = 0;
    this.number4 = 0;
  }

  ngOnInit() {
  }

  onCountChanged(value: number) {
    this.number3 = value;
    this.number4 = value;
  }

}
