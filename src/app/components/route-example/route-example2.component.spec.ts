/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RouteExample2Component } from './route-example2.component';

describe('RouteExample2Component', () => {
  let component: RouteExample2Component;
  let fixture: ComponentFixture<RouteExample2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteExample2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteExample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
