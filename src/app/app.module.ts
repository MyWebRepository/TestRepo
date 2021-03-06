import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ProjectionExampleModule } from './components/projection-example/projection-example.module';
import { LifecycleExampleModule } from './components/lifecycle-example/lifecycle-example.module';
import { RouteExampleModule } from './components/route-example/route-example.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { BackgroundDirective } from './directives/background/background.directive';
import { UnlessDirective } from './directives/unless/unless.directive';
import { ConfigService } from './configs/config.service';
import { UserDataService } from './services/user-data/user-data.service';
import { ToManyPipe } from './pipes/to-many/to-many.pipe';
//import { RxjsExampleComponent } from './components/rxjs-example/rxjs-example.component';
import { RxjsExample2Component } from './components/rxjs-example2/rxjs-example2.component';
import { InputExampleComponent } from './components/input-example/input-example.component';
import { OutputExampleComponent } from './components/output-example/output-example.component';
import { OutputExampleContainerComponent } from './components/output-example/output-example-container.component';
//import { RouteExample2Component } from './components/route-example/route-example2.component';
//import { RouteExampleContainerComponent } from './components/route-example/route-example-container.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    HighlightDirective,
    BackgroundDirective,
    ToManyPipe,
    UnlessDirective,
    SignupComponent,
    UserProfileComponent,
    UserListComponent,
    //RxjsExampleComponent,
    RxjsExample2Component,
    InputExampleComponent,
    OutputExampleComponent,
    OutputExampleContainerComponent,
    //RouteExample2Component,
    //RouteExampleContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ProjectionExampleModule,
    LifecycleExampleModule,
    RouteExampleModule
  ],
  providers: [ConfigService, UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
