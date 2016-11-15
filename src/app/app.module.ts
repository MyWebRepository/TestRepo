import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { ToManyPipe } from './pipes/to-many/to-many.pipe';
//import { NgModelStatusDirective } from './directives/ngModelStatus/ng-model-status.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    HighlightDirective,
    ToManyPipe,
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
