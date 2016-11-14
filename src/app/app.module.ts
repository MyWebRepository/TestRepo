import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyPipePipe } from './pipes/my-pipe.pipe';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { NgModelStatusDirective } from './directives/ngModelStatus/ng-model-status.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyPipePipe,
    LoginComponent,
    NavBarComponent,
    HighlightDirective,
    NgModelStatusDirective
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
