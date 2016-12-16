/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LifecycleContainerExampleComponent } from './lifecycle-container-example.component';

describe('LifecycleContainerExampleComponent', () => {
  let component: LifecycleContainerExampleComponent;
  let fixture: ComponentFixture<LifecycleContainerExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifecycleContainerExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecycleContainerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
