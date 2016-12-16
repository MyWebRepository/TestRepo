import {
  Component,
  SimpleChange,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  EventEmitter,
  //Input,
  //Output
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-example',
  templateUrl: './lifecycle-example.component.html',
  styleUrls: ['./lifecycle-example.component.css'],
  inputs: ['name'],
  outputs: ['log'],
})
export class LifecycleExampleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  //@Input()
  name: string;
  //@Output()
  log: EventEmitter<any> = new EventEmitter<any>();
  _verb: string = 'set';
  _onChangesCounter: number = 0;

  // Only called if there is an [input] variable set by parent.
  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    let changesMsgs:string[] = [];
    for (let propName in changes) {
      if (propName === 'name') {
        let name = changes['name'].currentValue;
        changesMsgs.push(`name ${this._verb} to "${name}"`);
      } else {
        changesMsgs.push(propName + ' ' + this._verb);
      }
    }
    this.log.emit(`onChanges (${this._onChangesCounter++}): ${changesMsgs.join('; ')}`);
    this._verb = 'changed';
  }

  ngOnInit() {
    this.log.emit(`onInit`);
  }

  ngDoCheck() {
    this.log.emit(`doCheck`);
  }

  ngAfterContentInit() {
    this.log.emit(`afterContentInit`);
  }

  // Called after every change detection check
  // of the component (directive) CONTENT
  // Beware! Called frequently!
  ngAfterContentChecked() {
    this.log.emit('afterContentChecked');
  }

  ngAfterViewInit() {
    this.log.emit(`afterViewInit`);
  }

  // Called after every change detection check
  // of the component (directive) VIEW
  // Beware! Called frequently!
  ngAfterViewChecked() {
    this.log.emit(`afterViewChecked`);
  }

  ngOnDestroy() {
    this.log.emit(`onDestroy`);
  }

}
