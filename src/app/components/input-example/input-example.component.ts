import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-example',
  templateUrl: './input-example.component.html',
  styleUrls: ['./input-example.component.css']
})
export class InputExampleComponent implements OnInit {
  @Input() message: string;

  constructor() { }

  ngOnInit() {
  }

}
