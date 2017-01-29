import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive ({
  selector: '.bgClass'
})
export class BackgroundDirective {
  @HostBinding('style.backgroundColor') bgColor = 'blue';

  @HostListener('mouseenter')
  enter() {
    this.bgColor = 'yellow';
  }

  @HostListener('mouseleave')
  leave() {
    this.bgColor = 'blue';
  }
}
