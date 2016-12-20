import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RouteExampleComponent } from './route-example.component';
import { RouteExample2Component } from './route-example2.component';
import { RouteExampleContainerComponent } from './route-example-container.component';
import { routing, appRoutingProviders } from './route-example.route';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    routing
  ],
  declarations: [
    RouteExampleComponent,
    RouteExample2Component,
    RouteExampleContainerComponent
  ],
  exports: [
    RouteExampleContainerComponent
  ],
  providers: [
    appRoutingProviders
  ],
})
export class RouteExampleModule { }
