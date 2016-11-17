import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { ToManyPipe } from './pipes/to-many/to-many.pipe';
import { UnlessDirective } from './directives/unless/unless.directive';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
//import { NgModelStatusDirective } from './directives/ngModelStatus/ng-model-status.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    HighlightDirective,
    ToManyPipe,
    UnlessDirective,
    SignupComponent,
    UserProfileComponent
    //NgModelStatusDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
