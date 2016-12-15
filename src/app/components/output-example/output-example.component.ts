import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-example',
  templateUrl: './output-example.component.html',
  styleUrls: ['./output-example.component.css']
})
export class OutputExampleComponent implements OnInit {
  @Input() count = 0;
  @Output() countChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.count++;
    this.countChange.emit(this.count);
  }
}
