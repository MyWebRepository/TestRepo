import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifecycleExampleComponent } from './lifecycle-example.component';
import { LifecycleContainerExampleComponent } from './lifecycle-container-example.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    LifecycleExampleComponent,
    LifecycleContainerExampleComponent
  ],
  declarations: [
    LifecycleExampleComponent,
    LifecycleContainerExampleComponent
  ]
})
export class LifecycleExampleModule { }
