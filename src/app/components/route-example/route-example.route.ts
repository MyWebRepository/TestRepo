import { Routes, RouterModule } from '@angular/router';
import { RouteExampleComponent } from './route-example.component';
import { RouteExample2Component } from './route-example2.component';

export const routes: Routes = [
  { path: '', redirectTo: 'component-one', pathMatch: 'full' },
  { path: 'component-one', component: RouteExampleComponent },
  { path: 'component-two', component: RouteExample2Component }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);
