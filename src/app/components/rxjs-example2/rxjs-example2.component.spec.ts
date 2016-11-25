/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RxjsExample2Component } from './rxjs-example2.component';

describe('RxjsExample2Component', () => {
  let component: RxjsExample2Component;
  let fixture: ComponentFixture<RxjsExample2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsExample2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsExample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
